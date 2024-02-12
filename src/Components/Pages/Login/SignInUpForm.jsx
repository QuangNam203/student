import React from 'react';
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import './styles.css'

function SignInUpForm(){

    return(
        <Formik
        initialValues={
            {
                username:'',
                password:'',
                email:''
            }
        }
        // validationSchema={Yup.object({
        //     username: Yup.string()
        //         .min(5, ()=>{
        //           return(
        //             <Alert className='error' variant="filled" severity="error"/>
        //           )
        //         })
        //         .required(()=><Alert variant="filled" severity="warning"/>),
                
        //     password: Yup.string()
        //         .min(5, ()=>{
        //           return(
        //             <Alert className='error' variant="filled" severity="error"/>
        //           )
        //         })
        //         .required(()=><Alert variant="filled" severity="warning"></Alert>)

        // })}
        validateOnChange={false}
        validateOnBlur={false}
    >
      <div class="container">
        <div class="signin-signup">
              <Form className='sign-in-form'>
                    <h2 class="title">Sign in</h2>
                    <FastField name="username">
                    {({ field, form, meta }) => (
                        <div class="input-field">
                        <ion-icon name="person"></ion-icon>
                        <input type="text" placeholder="Username" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <FastField name="password">
                    {({ field, form, meta }) => (
                        <div class="input-field">
                        <ion-icon name="lock-closed"></ion-icon>
                        <input type="password" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type="submit" value="Login" class="btn"/>
                    <p class="social-text">Or Sign in with social platform</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                    <p class="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign Up</a></p>
                </Form>
                <Form className='sign-up-form'>
                    <h2 class="title">Sign in</h2>
                    <FastField name="username">
                    {({ field, form, meta }) => (
                        <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <FastField name="email">
                    {({ field, form, meta }) => (
                        <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <FastField name="password">
                    {({ field, form, meta }) => (
                        <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type="submit" value="Sign up" class="btn"/>
                    <p class="social-text">Or Sign in with social platform</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a href="" class="social-icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                    <p class="account-text">Already have an account? <a href="#" id="sign-up-btn2">Sign In</a></p>
                </Form>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>Member of Brand?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button class="btn" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src="signin.svg" alt="" class="image"/>
                </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>New to Brand?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                            <button class="btn" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src="signup.svg" alt="" class="image"/>
                    </div>
                </div>
            </div>
        </Formik>
    );
}
export default SignInUpForm;