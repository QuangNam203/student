

import React, { useCallback, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';


function SignInUpForm(){

    const handleChangeSignIn = useCallback(()=>{
        const container = document.querySelector(".container-Login");
        const sign_in_btn = document.querySelector("#sign-in-btn");
        container.classList.remove("sign-up-mode");
    })

    const handleChangeSignUp = useCallback(()=>{
        const container = document.querySelector(".container-Login");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        container.classList.add("sign-up-mode")
    })

    const handlchangeSignUpBtn2 = useCallback(()=>{
        const container = document.querySelector(".container-Login");
        const sign_up_btn2 = document.querySelector("#sign-up-btn2");
        container.classList.add("sign-up-mode2");
    })
    
    const handlchangeSignInBtn2 = useCallback(()=>{
        const container = document.querySelector(".container-Login");
        const sign_in_btn2 = document.querySelector("#sign-in-btn2");
        container.classList.remove("sign-up-mode2");
    })

    return(
      <div className="container-Login">
        <div className="signin-signup">
        <SignInComponent SignUpBtn2={handlchangeSignUpBtn2}/>
        <SignUpComponent SignInBtn2={handlchangeSignInBtn2}/>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>Member of Brand?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                    <button className="btn" id="sign-in-btn" onClick={handleChangeSignIn}>Sign in</button>
                </div>
                <img src="signin.svg" alt="" className="image"/>
            </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>New to Brand?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button className="btn" id="sign-up-btn" onClick={handleChangeSignUp}>Sign up</button>
                    </div>
                    <img src="signup.svg" alt="" className="image"/>
                </div>
            </div>
        </div>
    );
}
export default SignInUpForm;