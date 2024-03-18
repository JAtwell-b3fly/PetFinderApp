import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUpInStyles.css";
import "../index.css";

const SignIn = () => {
  return (
    <div className='box'>
        <h1 style={{fontSize:"xx-large"}}>Login</h1>

        <form className='form'>
            <div className='label-input'>
                <label className='label'>Email Address</label>
                <input type="email" className='sign-up-in-inputs'/>
            </div>

            <div className='label-input'>
                <label className='label'>Password</label>
                <input type="password" className='sign-up-in-inputs'/>
            </div>
            
            <Link>
                <p className='link' style={{textAlign: "right", marginTop: "2.5rem", marginRight: "5rem"}}>Forgot Password?</p>
            </Link>

            <div style={{display:"flex", flexDirection: "row", marginLeft: "1rem"}}>
                <p className='label'>Do not have an account? </p>

                <button style={{background: "unset", border: "none", marginLeft: "0.5rem", fontSize: "medium"}}>
                    <p className='link' style={{fontWeight: "600"}}>Sign Up</p>
                </button>
            </div>

            <button className='login'>
                Login
            </button>
        </form>
    </div>
  )
}

export default SignIn