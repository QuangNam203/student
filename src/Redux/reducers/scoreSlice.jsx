import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        scores:[],
        page:1,
        size:10,
        totalSize:1,
        search:''
    },
    reducers:{
        setListScore: (state,action)=>{
            state.scores = action.payload;
        },
        setPageScore: (state,action)=>{
            state.page = action.payload;
        },
        setSizeScore: (state,action)=>{
            state.size = action.payload;
        },
        setTotalSizeScore: (state,action)=>{
            state.totalSize = action.payload;
        },
        setSearchScore: (state,action)=>{
            state.search = action.payload;
        },
    },
    // extraReducers:{
    //     // request pending , fulling
    //}
})
export const { actions, reducer } = scoreSlice;
export const { setListScore,setPageScore,setSizeScore,setTotalSizeScore, setSearchScore } = actions

export default scoreSlice;