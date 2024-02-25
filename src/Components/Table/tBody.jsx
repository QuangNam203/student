import { memo, useState } from "react";
import Avatar from '@mui/joy/Avatar';
import { connect } from 'react-redux';
import { selectPage, selectStudents } from "../../Redux/selectors/studentSelector";
import { setListStudents } from "../../Redux/reducers/studentSlice";
import studentAPI from "../../API/student/StudentAPI";
import { TableBody } from '@mui/material';
import { Table } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import AlertDeleteModal from "../Modal/DeleteComponent";
import UpdateModal from "../Modal/UpdateComponent";

function TBody(props){

    const [TitleColunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'className', name:'Lớp', sort:false},
        {dataFiled:'name', name:'Họ Tên', sort:false},
        {dataFiled:'dateOfBirth', name:'Ngày Sinh', sort:false},
        {dataFiled:'sex', name:'Giới Tính', sort:false},
        {dataFiled:'sdt', name:'SĐT', sort:false},
        {dataFiled:'email', name:'Email', sort:false},
        {dataFiled:'course', name:'Ngành', sort:false},
    ]);

    const setStudent = props.setListStudents;

    const colunmList = TitleColunms.map(
        (item,index)=>(
            <th key={index} onClick={ async ()=>{
                    const sort = item.sort;
                    if(sort === false){
                        const result = await studentAPI.getAll(props.page,10,`${item.dataFiled}`,`asc`);
                        setStudent(result.content);
                    }
                    else{
                        const result = await studentAPI.getAll(props.page,10,`${item.dataFiled}`,`desc`);
                        setStudent(result.content);
                    }
                    item.sort = !item.sort;
                    console.log(`${item.name}: ${item.sort}: ${props.page}`)
                }
            }>
                {item.name}
                <ion-icon name="arrow-up-outline"></ion-icon>
            </th>)
        )
    
    const dataList = props.datdRow.map(
        (item,index)=>(
            <tr key={index} onDoubleClick={()=>console.log("ok")}>
                <td key={index}> {item.id} </td>
                <td key={index}> {item.clazzName}</td>
                <td key={index}> <Avatar className="img"></Avatar>{item.name}</td>
                <td key={index}> {item.dateOfBirth} </td>
                <td key={index}> {item.sex}</td>
                <td key={index}> {item.sdt}</td>
                <td key={index}> {item.email}</td>
                <td key={index}> {item.clazzCareersName}</td>
                <td key={index} style={{'textAlign':'center'}}> 
                    <UpdateModal ID={item.id}/>
                    <AlertDeleteModal studentID={item.id}/>
                </td>
            </tr>)
        )    

    return(
        <>
            <section className="table__body">
                <table >
                    <thead>
                        <tr>
                            {colunmList}
                            <th style={{'textAlign':'center'}}>
                                Option
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {dataList}
                    </tbody>
                </table>
            </section>
        </>
    );
}
const mapStateToProps = state => {
    return {
        student : selectStudents(state),
        page: selectPage(state)
    }
}
export default connect(mapStateToProps,{setListStudents})(TBody);