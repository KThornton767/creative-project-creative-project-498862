import React from 'react'
import './CSS/LoginRegister.css'
import ApiClient from '../axios.js'


const LoginRegister = () => {

  return (
    <div class="loginregister">
      <div class="loginbox">
        <h1>Sign Up</h1>
        <div className="loginfields">
          <input type="text" placeholder='Your Name'></input>
          <input type="text" placeholder='Email Address'></input>
          <input type="text" placeholder='Password'></input>
        </div>
        <button className="registerButton" id="registerButton" onclick="ApiClient.register()">Continue</button>
        <p className='loginswitch'>Already signed up? <button>Login here!</button>  </p> 
      </div>
    </div>
  )
}

export default LoginRegister;