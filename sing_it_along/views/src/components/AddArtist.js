import React, {useRef, useState} from 'react'
import { sendReq } from '../utils/sendReq'
import { Redirect } from 'react-router-dom'
//================================================================================================
export const AddArtist = ()=>{

    const inputArtistName = useRef('')
    const inputImgUrl = useRef('')
    const [msg, setMsg] = useState('')
    async function add(){
        const [artistName, url] = [inputArtistName.current.value, inputImgUrl.current.value]
        const reqObject = {"name" : artistName, "url" : url} 
        const resp = await sendReq(process.env.REACT_APP_PREPEND  + '/artists/add', 'POST', reqObject)
        const  data  = await resp.json()
        setMsg('Added')
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (msg != '')
    {
        return <Redirect to='/artists'/>
    }
    else{
        return (
            <>
                <div class="form-group">
                    <label for='artistName'>Artist Name</label>
                    <input ref={inputArtistName} type="text" class="form-control" id='artistName' placeholder='Artist Name'/>
                </div>
                <div class="form-group">
                    <label for='imgUrl'>Artist Image URL</label>
                    <input ref={inputImgUrl} type="text" class="form-control" id='imgUrl' placeholder='Image URL'/>
                </div>
                <button  class="btn btn-success" onClick={add}>ADD</button>
            </>
        )
    }

    

}