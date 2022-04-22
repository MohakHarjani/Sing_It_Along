import React, {useEffect, useState, useRef}from 'react'
import {sendReq} from '../utils/sendReq'
import { ShowSong } from './ShowSong';
//===================================================================================================

export const Songs = ({isAdmin, username})=>{
    const cardStyle = {
        width : '18rem',
        marginBottom : '20px',
        marginRight : '14px',

    }
    const imgStyle = {
        height: '71%'
    }
    ///////////////////////////////////////////////////////////
    const [songs, setSongs] = useState([])
    const [sort, setSort] = useState('')
    const [songName, setSongName] = useState('')
    const inputSort = useRef('')
    useEffect(()=>{
        console.log('render')
        let appendStr = ''
        if (sort === '') appendStr = '/'
        else if (sort === 'asc') appendStr = '?order=asc'
        else if(sort === 'dsc') appendStr = '?order=dsc'
        const promise = sendReq(process.env.REACT_APP_PREPEND + '/songs/all' + appendStr, 'GET'); //call to backend
        promise.then((response)=>{
            response.json()
            .then((data)=>{
                setSongs(data)
            })
            .catch((err)=>{
                console.log('JSON ERROR', err)
            })
        }).catch((err)=>{
            console.log('SERVER ERROR', err)})
    })
    function changeOrder(){
        setSort(inputSort.current.value);
    }
    function showSong(songname){
        setSongName(songname)
    }
    if (songName !== ''){
        return (<ShowSong songName = {songName} isAdmin={isAdmin} username={username}/>)
    }
    else{
        return (
            <>
            <h1 style={{marginBottom : '40px', color : '#004085', textDecoration: 'underline'}}>ALL SONGS</h1>
            <span>Sort : </span>
            <select onChange={changeOrder} ref = {inputSort}>
                <option value = "nil">Nil</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
            </select>
            <br/><br/>
            <div className = 'row'>
                
                {songs.map((song)=>{
                    return (
                        <div className="card" style={cardStyle}>
                            <img onClick = {()=>{showSong(song.name)}} style={imgStyle}className="card-img-top w-100" src={song.imgUrl} alt="Card image cap"/>
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



