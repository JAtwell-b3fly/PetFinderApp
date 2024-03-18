import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUpInStyles.css";

const SignUp = () => {
  return (
    <div className='box' style={{paddingTop: "2rem"}}>
        <h1 style={{fontSize:"xx-large"}}>Register</h1>

        <form className='form'>
            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Full Name</label>
                <input type="text" className='sign-up-in-inputs'/>
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Physical Address</label>
                <input type="text" className='sign-up-in-inputs'/>
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Email Address</label>
                <input type="email" className='sign-up-in-inputs'/>
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Password</label>
                <input type="password" className='sign-up-in-inputs'/>
            </div>

            <div style={{display:"flex", flexDirection: "row", marginLeft: "1rem"}}>
                <p className='label'>Already have an account? </p>

                <button style={{background: "unset", border: "none", marginLeft: "0.5rem", fontSize: "medium"}}>
                    <p className='link' style={{fontWeight: "600"}}>Login</p>
                </button>
            </div>

            <button className='login' style={{marginTop: "0.5rem", marginBottom: "0.1rem"}}>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUp