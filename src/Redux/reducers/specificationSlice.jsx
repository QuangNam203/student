import { createSlice } from "@reduxjs/toolkit";

const specificationSlice = createSlice({
    name: 'specification',
    initialState: {
        search:'',
    },
    reducers:{
        setSearchSpecifi: (state,action)=>{
            state.search = action.payload;
        },
    },
    // extraReducers:{
    //     // request pending , fulling
    //}
})
export const { actions, reducer } = specificationSlice;
export const { setSearchSpecifi} = actions

export default specificationSlice;