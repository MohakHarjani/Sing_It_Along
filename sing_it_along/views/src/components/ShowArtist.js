import React , {useState, useRef, useEffect}from 'react'
import { sendReq } from '../utils/sendReq'
import { ShowSong } from './ShowSong';
import { Redirect } from 'react-router-dom';
//============================================================================================================
export const ShowArtist = ({artistName, isAdmin, username})=>{
    const [artistSongs, setArtistSongs] = useState([])
    const [songName, setSongName] = useState('')
    const cardStyle = {
        width : '18rem',
        marginBottom : '30px',
        marginRight : '14px'

    }
    const imgStyle = {
        height: '71%'
    }
    useEffect(()=>{
        const promise = sendReq(process.env.REACT_APP_PREPEND  + `/songs?artist=${artistName}`, 'GET');
        promise.then((response)=>{
            response.json()
            .then((data)=>{
                if (data.length == 0) {data = null}
                setArtistSongs(data)
            })
            .catch((err)=>{
                console.log('JSON ERROR', err)
            })
        }).catch((err)=>{
            console.log('SERVER ERROR', err)})
    }, [])
    function showSong(songName){
        setSongName(songName);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (songName != ''){
        return (<ShowSong songName = {songName} isAdmin={isAdmin} username={username}/>)
    }
    else if (artistSongs === null){
        console.log('gaane',artistSongs)
        return <Redirect to='/artists'/>
    }
    else{
        return(
            <>
            <h1>Songs of {artistName}</h1><br/><br/>
            <div className = 'row'>
                {artistSongs.map((song)=>{
                    return (
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top w-100" style={imgStyle}onClick={()=>{showSong(song.name)}}src={song.imgUrl} alt="Card image cap"/>
                            <h2>{song.name}</h2>
                            <h6>Artist : {song.artistName}</h6>
                        </div>
                )
                })}
            </div>
            </>
            
        )
    }
    


}