import { createSlice } from "@reduxjs/toolkit";

const classSlice = createSlice({
    name: 'class',
    initialState: {
        classes:[],
        page:1,
        size:10,
        totalSize:1,
        search:''
    },
    reducers:{
        setListClass: (state,action)=>{
            state.class = action.payload;
        },
        setPageClass: (state,action)=>{
            state.page = action.payload;
        },
        setSizeClass: (state,action)=>{
            state.size = action.payload;
        },
        setTotalSizeClass: (state,action)=>{
            state.totalSize = action.payload;
        },
        setSearchClass: (state,action)=>{
            state.search = action.payload;
        },
    },
    // extraReducers:{
    //     // request pending , fulling
    //}
})
export const { actions, reducer } = classSlice;
export const { setListClass,setPageClass,setSizeClass,setTotalSizeClass, setSearchClass } = actions

export default classSlice;