import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import storage from "../../API/Storage";
// import { USER_TOKEN, USER_LOGIN_INFO } from '../constants'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo:storage.getUserInfo(),
        token:storage.getToken()
    },
    reducers:{
        //<=> case Action 
        setUserInFo: (state,action)=>{
            // mutation hoat dong = IMMER
            state.userInfo = action.payload;
        }//{type: 'token/USER_TOKEN'}
        ,
        setUserToken : (state,action)=>{
            state.token = action.payload;
        }
    },
    // extraReducers:{
    //     // request pending , fulling
    // }
})
export const { actions, reducer } = userSlice;
export const {  setUserInFo , setUserToken } = actions

export default userSlice;