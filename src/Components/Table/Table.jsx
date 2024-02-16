import { useCallback,useEffect,useMemo,useState,useRef } from "react";
import THead from './THead';
import TBody from './TBody';
import studentAPI from "../../API/student/StudentAPI";
import * as React from 'react';
import { connect } from "react-redux";
import { selectPage, selectSize, selectStudents, selectTotalSize } from "../../Redux/selectors/studentSelector";
import { setListStudents, setPageStudents, setSearchStudents, setSizeStudents, setTotalSizeStudents } from "../../Redux/reducers/studentSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Table(props){

    const [search,setSearch] = useState('');

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
                        <label for="export-file" className="export__file-btn" title="Export File"></label>
                        <input type="checkbox" id="export-file"></input>
                        <div className="export__file-options">
                            <label>Export As &nbsp; &#10140;</label>
                            <label for="export-file" id="toPDF">PDF <img src={"../../images/pdf.png"} alt=""/></label>
                            <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""></img></label>
                            <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""></img></label>
                            <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""></img></label>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps,{setListStudents,setPageStudents,setSizeStudents,setTotalSizeStudents,setSearchStudents})(Table);