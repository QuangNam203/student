import React from 'react'
import SignInUpForm from "../Components/Pages/Login/SignInUpForm";
import storage from '../api/Storage';

function withAuth(Authenticatedcomponent){

    class HOC extends React.Component {
        isAuthenticated = () => {
            return storage.getToken !== null && storage.getToken !== undefined;
        }
        render(){
            return !this.isAuthenticated() ? <SignInUpForm/> : <Authenticatedcomponent {...this.props}/>
        }
    }

    return HOC
}

export default withAuth;