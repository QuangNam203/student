import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import { memo } from 'react';

function SignInComponent(props) {
    return(
        <Formik
            initialValues={
                {
                    username:'',
                    password:'',
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
            <Form className='sign-in-form'>
                    <h2 className="title">Sign in</h2>
                    <FastField name="username">
                    {({ field, form, meta }) => (
                        <div className="input-field">
                        <ion-icon name="person"></ion-icon>
                        <input type="text" placeholder="Username" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <FastField name="password">
                    {({ field, form, meta }) => (
                        <div className="input-field">
                        <ion-icon name="lock-closed"></ion-icon>
                        <input type="password" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type="submit" value="Login" className="btn"/>
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a href="" className="social-icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                    <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2" onClick={()=>props.SignUpBtn2()}>Sign Up</a></p>
                </Form>
            </Formik>
    );
}

export default memo(SignInComponent);