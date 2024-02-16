const setRememberMe = (isRememberME)=>{
    localStorage.setItem('isRememberME',isRememberME);
}

const isRememberME = ()=>{
    return localStorage.getItem('isRememberME');
}

const setItem = (key,value)=>{
    if(isRememberME()){
        localStorage.setItem(key,value);
    }
    else{
        sessionStorage.setItem(key,value);
    } 
}

const getItem = (key)=>{
    if(isRememberME()){
        localStorage.getItem(key);
    }
    else{
        sessionStorage.getItem(key);
    } 
}
const setToken = (token)=>{
    localStorage.setItem('token',token);
}
const getToken = ()=>{
    return localStorage.getItem('token');
}

const setUserInfo = (username,email,name,role,status)=>{
    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('name',name);
    localStorage.setItem('role',role);
    localStorage.setItem('status',status);
}

const getUserInfo = ()=>{
    return {
        username: localStorage.getItem('username'),
        email:localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role'),
        status: localStorage.getItem('status')
    };
}

const storage = {setToken,setUserInfo,getToken,getUserInfo,isRememberME,setRememberMe};
export default storage;