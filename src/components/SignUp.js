import React, {useState} from 'react';
import "./SignUpInStyles.css";
import {auth, db} from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {collection, doc, setDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const SignUp = ({toggle}) => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [physicalAddress, setPhysicalAddress] = useState("");
    const [password, setPassword] = useState("");
    
    const register = async() => {
        try {
            createUserWithEmailAndPassword(auth,email,password).then(async() => {
                try {
                    const auth = getAuth();
                    const user = auth.currentUser;
                    const userId = user.uid;

                    const userDocRef = doc(db, "users", email);
                    await setDoc(userDocRef, {
                        fullName: fullName,
                        physicalAddress: physicalAddress,
                        email: email,
                        password: password,
                        userId: userId,
                    })
                } catch (error) {
                    console.error(error.message)
                }
            });
            alert("Successfully Registered")
            navigate("/home");
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <div className='box' style={{paddingTop: "2rem"}}>
        <h1 style={{fontSize:"xx-large"}}>Register</h1>

        <form className='form'>
            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Full Name</label>
                <input type="text" className='sign-up-in-inputs' onChange={(event) => setFullName(event.target.value)} value={fullName} />
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Physical Address</label>
                <input type="text" className='sign-up-in-inputs' value={physicalAddress} onChange={(event) => setPhysicalAddress(event.target.value)} />
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Email Address</label>
                <input type="email" className='sign-up-in-inputs' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div className='label-input' style={{marginBottom: "0.5rem"}}>
                <label className='label'>Password</label>
                <input type="password" className='sign-up-in-inputs' value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            <div style={{display:"flex", flexDirection: "row", marginLeft: "1rem"}}>
                <p className='label'>Already have an account? </p>

                <button style={{background: "unset", border: "none", marginLeft: "0.5rem", fontSize: "medium"}} onClick={toggle}>
                    <p className='link' style={{fontWeight: "600"}}>Login</p>
                </button>
            </div>

            <button className='login' style={{marginTop: "0.5rem", marginBottom: "0.1rem"}} onClick={register}>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUp