import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_TOKEN, USER_LOGIN_INFO } from '../constants'


const tokenSlide = createSlice({
    name: 'token',
    initialState: {
        token: ''
    },
    reducers:{
        //<=> case Action 
        USER_TOKEN: (state,action)=>{
            // mutation hoat dong = IMMER

        }//{type: 'token/USER_TOKEN'}
        // xu ly token
    },
    extraReducers:{
        // request pending , fulling
    }
})

export const { actions, reducer } = tokenSlide;
export default tokenSlide;