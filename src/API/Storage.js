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
    setItem('token',token);
}

const getToken = ()=>{
    return getItem('token');
}

const setUserInfo = (username,email,name,role,status)=>{
    setItem('username',username);
    setItem('email',email);
    setItem('name',name);
    setItem('role',role);
    setItem('status',status);
}

const getUserInfo = ()=>{
    return {
        username: getItem('username'),
        email:getItem('email'),
        name: getItem('name'),
        role: getItem('role'),
        status: getItem('status')
    };
}

const storage = {setToken,setUserInfo,getToken,getUserInfo,isRememberME,setRememberMe};
export default storage;