import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import { memo, useState } from 'react';
import { connect } from "react-redux";
import { wait } from '@testing-library/user-event/dist/utils';
import loginAPI from '../../../API/Login/LoginAPI';
import storage from '../../../API/Storage';
import { setUserInFo, setUserToken } from '../../../Redux/reducers/userSlice';
import { selectName, selectToken, selectUser } from '../../../Redux/selectors/userSelector';
import { useNavigate } from 'react-router-dom';

function SignInComponent(props) {

    const [email, setEmail] = useState("");
    const [checkRememberMe,setCheckRememberMe] = useState(storage.isRememberME());
    const history = useNavigate();
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
            onSubmit={ async (values) => {
                try {
                    const result = await loginAPI.login(
                        values.username,
                        values.password);
            
                    if(result.token === null || result.token === undefined){
                        // form active user
                    }
                    else
                    {
                        // set Remember me
                        
                        // save token storage
                        storage.setToken(result.token)
                        // save userInfo storage
                        storage.setUserInfo(
                        result.userName,
                        result.email,
                        result.name,
                        result.role,
                        result.status)
                        // save token & userInFo to redux
                        props.setUserInFo(storage.getUserInfo());
                        props.setUserToken(storage.getToken());
                      
                        history("/");
                    }
                } catch (error) {
                    if(error.status === 401){

                    }
                }
            }}
        >
            {({isSubmitting, validateField,validateForm}) =>(
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
                        <input type="text" placeholder="Password" {...field}/>
                        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
                        </div>
                    )}
                    </FastField>
                    <input type="submit" value="Login" className="btn" disabled={()=>isSubmitting}/>
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
            )}   
        </Formik>
    );
}

const mapGlobalStateToProps = state => {
    return {
        token: selectToken(state),
        name: selectName(state),
        users: selectUser(state)
    };
};

export default connect(mapGlobalStateToProps ,{ setUserInFo , setUserToken })(SignInComponent);