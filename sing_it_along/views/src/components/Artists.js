import React, {useEffect, useState, useRef} from 'react'
import { sendReq } from '../utils/sendReq'
import {ShowArtist} from './ShowArtist'
//=============================================================================================
export const Artists = ({isAdmin, username})=>{
    const [artists, setArtists] = useState([])
    const [artistName, setArtistName] = useState('')
    const cardStyle = {
        width : '18rem',
        marginBottom : '30px',
        marginRight : '14px'

    }
    const imgStyle = {
        height: '81%'
    }
    ///////////////////////////////////////////////////
    useEffect(()=>{
        const promise = sendReq(process.env.REACT_APP_PREPEND  + '/artists/all', 'GET');
        promise.then((response)=>{
            response.json()
            .then((data)=>{
                setArtists(data)
            })
            .catch((err)=>{
                console.log('JSON ERROR', err)
            })
        }).catch((err)=>{
            console.log('SERVER ERROR', err)})

    }, [])

    function showArtist(artist){
        setArtistName(artist.name);
    }
    if (artistName != '')
    {
        return (<ShowArtist artistName={artistName} isAdmin={isAdmin} username={username}/>)
    }
    else{
        return(
            <>
            <h1 style={{marginBottom : '40px', color : '#004085', textDecoration: 'underline'}}>ALL ARTISTS</h1>
            <div className='row'>
                {artists.map((artist)=>{
                    return (
                    <div className="card" style={cardStyle}>
                        <img  className="card-img-top w-100" onClick = {()=>{showArtist(artist)}}style={imgStyle}src={artist.url} alt="Card image cap"/>
                        <h2>{artist.name}</h2>
                    </div>
                    )
                })}
            </div>
            </>

        )
    }
}