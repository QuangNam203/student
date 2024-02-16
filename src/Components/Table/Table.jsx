import { useCallback,useEffect,useMemo,useState } from "react";
import THead from './THead';
import TBody from './TBody';
import studentAPI from "../../API/student/StudentAPI";
import * as React from 'react';
import { connect } from "react-redux";
import { selectPage, selectSize, selectStudents, selectTotalSize } from "../../Redux/selectors/studentSelector";
import { setListStudents, setPageStudents, setSizeStudents, setTotalSizeStudents } from "../../Redux/reducers/studentSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Table(props){

    const setStudent = props.setListStudents;
    const setPage = props.setPageStudents;
    const setTotalSize = props.setTotalSizeStudents;

    useEffect(()=>{
        const getAllStudent = async ()=>{
            const result = await studentAPI.getAll(props.page);
            console.log(result);

            setStudent(result.content);
            setTotalSize(result.totalPages);
        }
        getAllStudent();
    },[setStudent,props.page])

    const handleChangePage = async (event, value) => {
        setPage(value);
    };

    return(
            <main className="table" id="customers_table">
                <THead title={"Managament"} />
                <TBody datdRow={props.student} />
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

export default connect(mapStateToProps,{setListStudents,setPageStudents,setSizeStudents,setTotalSizeStudents})(Table);