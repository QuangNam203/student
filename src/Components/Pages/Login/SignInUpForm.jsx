import React, { useCallback, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import './styles.css'
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';


function SignInUpForm(){



    const handleChangeSignIn = useCallback(()=>{
        const container = document.querySelector(".container");
        const sign_in_btn = document.querySelector("#sign-in-btn");
        container.classList.remove("sign-up-mode");
    })

    const handleChangeSignUp = useCallback(()=>{
        const container = document.querySelector(".container");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        container.classList.add("sign-up-mode")
    })

    const handlchangeSignUpBtn2 = useCallback(()=>{
        const container = document.querySelector(".container");
        const sign_up_btn2 = document.querySelector("#sign-up-btn2");
        container.classList.add("sign-up-mode2");
    })
    
    const handlchangeSignInBtn2 = useCallback(()=>{
        const container = document.querySelector(".container");
        const sign_in_btn2 = document.querySelector("#sign-in-btn2");
        container.classList.remove("sign-up-mode2");
    })

    return(
        <Formik
        initialValues={
            {
                username:'',
                password:'',
                email:''
            }
        }
        validationSchema={Yup.object({
            username: Yup.string()
                .min(5, ()=>{
                  return(
                    <Alert className='error' variant="filled" severity="error"/>
                  )
                })
                .required(()=><Alert variant="filled" severity="warning"/>),
                
            password: Yup.string()
                .min(5, ()=>{
                  return(
                    <Alert className='error' variant="filled" severity="error"/>
                  )
                })
                .required(()=><Alert variant="filled" severity="warning"></Alert>)

        })}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values)=>{
            alert(JSON.stringify(values, null, 2));
        }}
    >
      <div class="container">
        <div class="signin-signup">
            <SignInComponent SignUpBtn2={handlchangeSignUpBtn2}/>
            <SignUpComponent SignInBtn2={handlchangeSignInBtn2}/>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>Member of Brand?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button class="btn" id="sign-in-btn" onClick={handleChangeSignIn}>Sign in</button>
                    </div>
                    <img src="signin.svg" alt="" class="image"/>
                </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>New to Brand?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                            <button class="btn" id="sign-up-btn" onClick={handleChangeSignUp}>Sign up</button>
                        </div>
                        <img src="signup.svg" alt="" class="image"/>
                    </div>
                </div>
            </div>
        </Formik>
    );
}
export default SignInUpForm;