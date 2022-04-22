import React, { useRef, useState } from 'react'
import { sendReq } from '../utils/sendReq';
import { Redirect, NavLink } from 'react-router-dom';
import { Login } from './Login';

//=======================================================================================================
export const Register = () => {
    const inputUser = useRef('');
    const inputPass = useRef('');
    const inputEmail = useRef('')
    const [dispMsg, setdispMsg] = useState('')
    const [isRegistered, setRegister] = useState('false')

    async function doRegister() {
        const username = inputUser.current.value
        const password = inputPass.current.value
        const email = inputEmail.current.value
        const reqBody = { "username": username, "password": password, "email" : email, "isAdmin" : 'false'}
        const response = await sendReq(process.env.REACT_APP_PREPEND  + '/user/register', 'POST', reqBody);
        const data = await response.json()
        setdispMsg(data.message)
    }
    if (dispMsg.startsWith('Registered') || isRegistered === 'true') {
        let msg = (dispMsg.startsWith('Registered'))? 'Registered successfully ! Login here to open the app' : 'Login here to open the app'
        return (<Login msg={msg}/>)
    }
    else {
        return (
            <div style={{margin : '0px 80px'}}>
                <h2 style={{color : 'blue', textDecoration : 'underline'}}>REGISTER</h2>
                <h6>{dispMsg}</h6>
                <div className='form-group'>
                    <label for='username'>Username</label>
                    <input ref={inputUser} id='username' className='form-control' type='text' placeholder='Username' />
                </div>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input ref={inputPass} id='password' className='form-control' type='password'placeholder='Password [min 8 characters]' />
                </div>
                <div className='form-group'>
                    <label for='email'>Email</label>
                    <input ref={inputEmail} id='email' className='form-control' type='email' placeholder='Email'/>
                </div>
                <div className='form-group'>
                    <button onClick={doRegister} className='btn btn-success'>REGISTER</button>
                </div>
                <div className='form-group'>
                    <button className = 'btn btn-primary'onClick = {()=>{setRegister('true')}}>Already have an account ? Login here</button>   
                </div>
            </div>
        )
    }
}