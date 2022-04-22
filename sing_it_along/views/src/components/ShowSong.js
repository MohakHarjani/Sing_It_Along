import React , {useState, useEffect}from 'react'
import { sendReq } from '../utils/sendReq'
import { NavLink, Redirect } from 'react-router-dom'
import { Songs } from './Songs'
import { Playlist } from './Playlist'
//==============================================================================================================
export const ShowSong = ({songName, isAdmin, username})=>{
    const [song, setSong] = useState('')
    const [msg, setMsg] = useState('')
    const [newUserName, setNewUserName] = useState('')
    let remove = {marginRight : '40px'}
    if (isAdmin === 'false')
    {
        remove = {display : 'none'}
    }
    const audioStyle = {
        width:'400px'
    }
    const cardStyle = {
        width : '40em',
        height : '700px',
        marginLeft : '200px'
    }
    const imgStyle = {
        height : '55%',
        width: '100%'
    }
    const delSong = async ()=>{
        const response = await sendReq(process.env.REACT_APP_PREPEND  + `/songs/delete/${songName}`)
        const data= await response.json();
        setMsg(data);
    }
    const addToPlaylist = async ()=>{
        const resObject = song;
        const response = await sendReq(process.env.REACT_APP_PREPEND  + `/user/${username}/addSong`, 'POST', resObject)
        const updatedUser = await response.json();
        setNewUserName(updatedUser.username);
    }
    useEffect(()=>{
        const promise = sendReq(process.env.REACT_APP_PREPEND  + `/songs/${songName}`, 'GET')
    promise.then((response)=>{
        response.json()
        .then((data)=>{
            setSong(data)
        }).catch((err)=>{
            console.log('JSON ERROR', err)
        })
    }).catch((err)=>{
        console.log('SERVER ERROR', err) })
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (msg != ''){
        return <Songs isAdmin='true'/>
    }
    else if (song === null){
        return <Redirect to= '/songs'/>
    }
    else if (newUserName !== ''){
        return <Playlist username={newUserName}/>
    }
    else{
        return (
            <>
            <div className="card" style={cardStyle}>
                <img className="card-img-top" src={song.imgUrl} style={imgStyle}alt="Card image cap"/>
                <h2 className="card-title">{song.name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Artist  : {song.artistName}</li>
                    <li className="list-group-item">Description : {song.description}</li>
                    <li className="list-group-item">
                        <audio controls src ={song.url} type = 'audio/mp4'>
                        </audio> 
                    </li>
                    <li className="list-group-item">
                        <button className = 'btn btn-danger' onClick={delSong} style={remove}>DELETE CURRENT SONG</button>
                        <button className = 'btn btn-success' onClick={addToPlaylist} >ADD TO PLAYLIST</button>
                    </li>
                </ul>
            </div>
            </>
            
        

        )
    }



}