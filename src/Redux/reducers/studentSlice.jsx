import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students:[],
        page:1,
        size:10,
        totalSize:1,
        search:''
    },
    reducers:{
        setListStudents: (state,action)=>{
            state.students = action.payload;
        },
        setPageStudents: (state,action)=>{
            state.page = action.payload;
        },
        setSizeStudents: (state,action)=>{
            state.size = action.payload;
        },
        setTotalSizeStudents: (state,action)=>{
            state.totalSize = action.payload;
        },
        setSearchStudents: (state,action)=>{
            state.search = action.payload;
        },
    },
    // extraReducers:{
    //     // request pending , fulling
    //}
})
export const { actions, reducer } = studentSlice;
export const { setListStudents,setPageStudents,setSizeStudents,setTotalSizeStudents, setSearchStudents } = actions

export default studentSlice;