import { createSlice } from "@reduxjs/toolkit";

const subjectSlice = createSlice({
    name: 'subject',
    initialState: {
        subjects:[],
        page:1,
        size:10,
        totalSize:1,
        search:''
    },
    reducers:{
        setListSubject: (state,action)=>{
            state.class = action.payload;
        },
        setPageSubject: (state,action)=>{
            state.page = action.payload;
        },
        setSizeSubject: (state,action)=>{
            state.size = action.payload;
        },
        setTotalSizeSubject: (state,action)=>{
            state.totalSize = action.payload;
        },
        setSearchSubject: (state,action)=>{
            state.search = action.payload;
        },
    },
    // extraReducers:{
    //     // request pending , fulling
    //}
})
export const { actions, reducer } = subjectSlice;
export const { setListSubject,setPageSubject,setSizeSubject,setTotalSizeSubject, setSearchSubject } = actions

export default subjectSlice;