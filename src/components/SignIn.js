import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./SignUpInStyles.css";
import "../index.css";
import {auth} from "../config/firebase";
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = ({toggle}) => {

    const navigate = useNavigate();

    const [emailL, setEmailL] = useState("");
    const [passwordL, setPasswordL] = useState("");

    const login = async() => {
        /*console.clear();
        console.log("Before signInWithEmailAndPassword");
        try {
            await signInWithEmailAndPassword(auth, emailL, passwordL);
            console.log("After signInWithEmailAndPassword");

            alert("Login Successful");
            navigate("/home");
        } catch (error) {
            console.error("Email and Password is invalid",error.message)
            console.log(emailL);
            console.log(passwordL);
            console.log(error);
        }*/
        
        alert("Login Successful");
        navigate("/home");
    }

  return (
    <div className='box'>
        <h1 style={{fontSize:"xx-large"}}>Login</h1>

        <form className='form'>
            <div className='label-input'>
                <label className='label'>Email Address</label>
                <input type="email" className='sign-up-in-inputs' value={emailL} onChange={(event) => setEmailL(event.target.value)} />
            </div>

            <div className='label-input'>
                <label className='label'>Password</label>
                <input type="password" className='sign-up-in-inputs' value={passwordL} onChange={(event) => setPasswordL(event.target.value)} />
            </div>
            
            <Link>
                <p className='link' style={{textAlign: "right", marginTop: "2.5rem", marginRight: "5rem"}}>Forgot Password?</p>
            </Link>

            <div style={{display:"flex", flexDirection: "row", marginLeft: "1rem"}}>
                <p className='label'>Do not have an account? </p>

                <button style={{background: "unset", border: "none", marginLeft: "0.5rem", fontSize: "medium"}} onClick={toggle}>
                    <p className='link' style={{fontWeight: "600"}}>Sign Up</p>
                </button>
            </div>

            <button className='login' onClick={login}>
                Login
            </button>
        </form>
    </div>
  )
}

export default SignIn