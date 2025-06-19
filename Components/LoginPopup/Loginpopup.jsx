import React, { useState } from 'react'

import './Loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const Loginpopup = ({setShowLogin}) => {
const [currstate,setCurrState] = useState("signup")

  return (
    <div className='login-popup'>
<form className="login-popup-container">
    <div className="login-popup-title">
        <h2>{currstate}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
        {currstate==="Login"? null :(<input type="text" placeholder='Your name' required />)}
        
        <input type="email"placeholder='your email' required />
        <input type="password" placeholder='password' required />
    </div>
    <button>{currstate==="signup"?"create account":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing,i agree to the terms of use & privavy policy.</p>

    </div>
     {
     currstate==="Login"
    ?<p>create a new account? <span onClick={()=>setCurrState("signup")}>click here</span></p>
    :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
     }

    
</form>
    </div>
  )
}

export default Loginpopup
