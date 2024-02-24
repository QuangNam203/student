import { useCallback,useEffect,useMemo,useState,useRef } from "react";
import classAPI from "../../API/class/ClassAPI";
import * as React from 'react';
import { connect } from "react-redux";
import { selectPage, selectSize, selectStudents, selectTotalSize } from "../../Redux/selectors/studentSelector";
import { setListStudents, setPageStudents, setSearchStudents, setSizeStudents, setTotalSizeStudents } from "../../Redux/reducers/studentSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CustomFilter from "../Table/CustomFilter";
import { Formik, Field, Form, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {setSearchSpecifi } from "../../Redux/reducers/specificationSlice";
import Crud from '../Option/Crud';
import TBody_Class from "./TBody_Class";

function Table(props){

    const [search,setSearch] = useState('');
    const [min,setMin] = useState();
    const [max,setMax] = useState();
    const [filter,setFilter] = useState('');

    const setStudent = props.setListStudents;
    const setPage = props.setPageStudents;
    const setTotalSize = props.setTotalSizeStudents;

    useEffect(()=>{
        const getAllStudent = async ()=>{
            const result = await studentAPI.getAll(props.page,10,'id','desc',search);
            console.log(result);

            setStudent(result.content);
            setTotalSize(result.totalPages);
        }
        getAllStudent();
    },[setStudent,props.page,search])

    const handleChangePage = async (event, value) => {
        setPage(value);
    };

    const handleSearch = (newState)=>{
        setSearch(newState);
    }
    
    let inputRef = useRef();
    const handleEventEnter = (event)=>{
        if(event.key === 'Enter'){
            let value =``;
            if(inputRef.current.value !== null && inputRef.current.value !== undefined){
                value = `name~*${inputRef.current.value}*`;
            }
            if(value === `name~**`){
                value =``;
            }
            setSearch(value);
        }
    }

    useEffect(()=>{
        if(inputRef.current.value === null && inputRef.current.value === undefined){
            const getAllStudent = async ()=>{
                const result = await studentAPI.getAll(props.page,10,'id','desc',search);
                console.log(result);
    
                setStudent(result.content);
                setTotalSize(result.totalPages);
            }
            getAllStudent();
        }
    })

    return(
        <main className="table" id="customers_table">
            <section className="table__header">
            <h1>Managament</h1>
                <div className="input-group">
                        <input
                            type="search" 
                            placeholder="Search Data..." 
                            ref={inputRef}
                            onKeyDown={handleEventEnter}
                        ></input>
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            <div className="export__file">
                <Crud />
                <CustomFilter/>
            </div>
            </section>
            <TBody_Class datdRow={props.student} />
            <Stack spacing={2}>
                <Pagination count={props.totalSize} page={props.page} color="primary" onChange={handleChangePage}/>
            </Stack>
        </main>
    );
}

const mapStateToProps = state => {
    return {
        student : selectStudents(state),
        page: selectPage(state),
        size: selectSize(state),
        totalSize: selectTotalSize(state),
    }
}

export default connect(mapStateToProps,{
    setListStudents,setPageStudents,setSizeStudents,setTotalSizeStudents,setSearchStudents,
    setSearchSpecifi
})(Table);