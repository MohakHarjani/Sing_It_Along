import React, {useRef, useState} from 'react'
import { sendReq } from '../utils/sendReq'
import { Redirect } from 'react-router-dom';
//=======================================================================================================================
export const AddSong = ()=>{
    const inputName = useRef('')
    const inputUrl = useRef('')
    const inputArtistName = useRef('')
    const inputImgUrl = useRef('')
    const inputDesc = useRef('')
    const [msg, setMsg] = useState('')
    async function add(){
        const [name, url, artistName, imgUrl, description] = [inputName.current.value, inputUrl.current.value, inputArtistName.current.value, inputImgUrl.current.value, inputDesc.current.value]
        const reqObject = {"name" : name, "url" : url, "artistName" : artistName, "imgUrl" : imgUrl, "description" : description} 
        const resp = await sendReq(process.env.REACT_APP_PREPEND  + '/songs/add', 'POST', reqObject)
        const  data  = await resp.json()
        setMsg('Added')
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (msg != '')
    {
        return <Redirect to='/songs'/>
    }
    else{
        return (
            <>
                <div class="form-group">
                    <label for='name'>Song Name</label>
                    <input ref={inputName} type="text" class="form-control" id='name' placeholder='Song Name'/>
                </div>
                <div class="form-group">
                    <label for='url'>Song URL</label>
                    <input ref={inputUrl} type="text" class="form-control" id='url' placeholder='Song URL'/>
                </div>
                <div class="form-group">
                    <label for='artistName'>Artist Name</label>
                    <input ref={inputArtistName} type="text" class="form-control" id='artistName' placeholder='Artist Name'/>
                </div>
                <div class="form-group">
                    <label for='imgUrl'>Song Image URL</label>
                    <input ref={inputImgUrl} type="text" class="form-control" id='imgUrl' placeholder='Song Image URL'/>
                </div>
                <div class="form-group">
                    <textarea ref={inputDesc} name="" id="description" cols="167" rows="3" placeholder='Song Description'></textarea>
                </div>
                <button type="submit" class="btn btn-success" onClick={add}>ADD</button>
            </>
        )
    }

}