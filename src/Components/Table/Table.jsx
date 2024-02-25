import {useRef} from "react";
import TBody from './TBody';
import * as React from 'react';
import { connect } from "react-redux";
import { setPageStudents, setSearchStudents } from "../../Redux/reducers/studentSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CustomFilter from "./CustomFilter";
import Crud from '../Option/Crud';

function Table(props){

    const setPage = props.setPageStudents;

    const handleChangePage = async (event, value) => {
        setPage(value);
    };

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
            props.setSearchStudents(value);
        }
    }

    return(
        <main className="table" id="customers_table">
            <section className="table__header">
            <h1>{props.title}</h1>
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
            <TBody {...props} />
            <Stack spacing={2}>
                <Pagination count={props.TotalSize} page={props.Page} color="primary" onChange={handleChangePage}/>
            </Stack>
        </main>
    );
}

export default connect(null,{setSearchStudents,setPageStudents})(Table);