import axios from 'axios';
import storage from './Storage';

const axiosClient = axios.create({
    baseURL: `http://localhost:8080/api/v1`,
    timeout: 5000,
    responseType: 'json'
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    // if token exists
    const token = storage.getToken();
    console.log(token);
    if(token !== null && token !== undefined){
        config.headers.Authorization = token;
    }

    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        // only get data
        return response.data;
    }

    return response;
}, (error) => {
    if(error.response){
        throw error.response;
    }
    else if(error.request){
        throw error.request;
    }
    else
    {
        throw error;
    }
});

export default axiosClient;