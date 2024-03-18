import React, {useState} from 'react';
import logo from "../assets/logo.jpg";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignUpIn = () => {

  

  return (
    <div className='sign-up-in-screen'>
      <div className='sign-up-in-form'>
        <SignUp />
      </div>

      <div>
        <div className='app-name'>
          <h1>PET SITTER <br />FINDER</h1>
        </div>

        <svg className="logo" width="100%" height="100%">
          <image href={logo} width="100%" height="100%" />
        </svg>

        <div className='welcome-box'>
          <p className='welcome'>
            Welcome to Pet Sitter Finder. Your go to for finding pet sitters
            near you. We have sitters to suite your special requests, budget
            and schedule.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpIn