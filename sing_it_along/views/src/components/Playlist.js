import React, {useState, useEffect} from 'react'
import { sendReq } from '../utils/sendReq'
//=====================================================================================
export const Playlist = ({username})=>{
    const cardStyle = {
        width : '25em',
        height : '370px',
        marginBottom : '56px',
        marginRight : '14px',
    }
    const imgStyle = {
        height : '55%',
        width: '100%'
    }
    const [playlist, setPlaylist] = useState([])
    useEffect(()=>{
        const promise = sendReq(process.env.REACT_APP_PREPEND + `/user/${username}`, 'GET')
        promise.then((resp)=>{
            resp.json()
            .then((data)=>{
                setPlaylist(data.playlist);
            })
            .catch((err)=>{
                console.log('JSON ERROR', err);
            })
        }).catch((err)=>{
            console.log('SERVER ERROR', err)
        })
    }, [])
    async function removePlaylist(song){
        const newUser = await sendReq(process.env.REACT_APP_PREPEND + `/user/${username}/delSong`, 'POST', song);
        const promise = sendReq(process.env.REACT_APP_PREPEND + `/user/${username}`, 'GET')
        promise.then((resp)=>{
            resp.json()
            .then((data)=>{
                setPlaylist(data.playlist);
            })
            .catch((err)=>{
                console.log('JSON ERROR', err);
            })
        }).catch((err)=>{
            console.log('SERVER ERROR', err)
        })
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    if (playlist.length === 0){
        return(<h1 style={{color : 'red'}}>No Songs in Playlist</h1>)
    }
    else{
        return(
        <div>
            <h1 style={{marginBottom : '40px', color : '#004085', textDecoration: 'underline'}}>SONGS IN YOUR PLAYLIST</h1>
            <div className = 'row'>
            {playlist.map((song)=>{
                return (
                    <div className="card " style={cardStyle}>
                        <img className="card-img-top" src={song.imgUrl} style={imgStyle}alt="Card image cap"/>
                        <h2 className="card-title">{song.name}</h2>
                        <audio controls src ={song.url} style={{marginBottom : '15px'}}type = 'audio/mp4'></audio>
                        <button className='btn btn-danger' onClick={()=>{removePlaylist(song)}}>REMOVE FROM PLAYLIST</button>
                    </div>
                    ) }
                )
            }
            </div>
        </div>
        )
    }
}