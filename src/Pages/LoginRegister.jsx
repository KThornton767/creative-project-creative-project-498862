import React from 'react'
import './CSS/LoginRegister.css'


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
        <button>Continue</button>
        <p className='loginswitch'>Already signed up? <span>Login here!</span>  </p> 
      </div>
    </div>
  )
}

export default LoginRegister;