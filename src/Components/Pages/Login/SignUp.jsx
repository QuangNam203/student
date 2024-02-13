import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import { memo } from 'react';


function SignUpComponent(props){
    return(
        <Formik
            initialValues={
                {
                    username:'',
                    email:'',
                    password:'',
                    confirmpassword:''
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
                    .required(()=><Alert variant="filled" severity="warning"></Alert>),
                email: Yup.string()
                    .min(5, ()=>{
                    return(
                        <Alert className='error' variant="filled" severity="error"/>
                    )
                    })
                    .required(()=><Alert variant="filled" severity="warning"></Alert>),
                confirmpassword: Yup.string().required("required")
                    .when(
                        "password",{
                            is:val =>(val && val.lenght > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Both password need to be the same"
                            )
                        }
                    )

            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values)=>{
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({isSubmitting, validateField,validateForm}) =>(
                <Form className='sign-up-form'>
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
                    <FastField name="email">
                    {({ field, form, meta }) => (
                        <div className="input-field">
                        <ion-icon name="mail"></ion-icon>
                        <input type="text" placeholder="Email" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <FastField name="password">
                    {({ field, form, meta }) => (
                        <div className="input-field">
                        <ion-icon name="lock-closed"></ion-icon>
                        <input type="text" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type="submit" value="Sign up" className="btn" disabled={()=>isSubmitting}/>
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
                    <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2" onClick={()=>props.SignInBtn2}>Sign In</a></p>
                </Form>
            )}
        </Formik>
    );
}

export default memo(SignUpComponent);