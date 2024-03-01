import { useEffect, useState } from "react";
import { setListStudents, setPageStudents, setSearchStudents, setTotalSizeStudents } from "../../../Redux/reducers/studentSlice";
import Table from "../../Table/Table";
import { connect } from "react-redux";
import classAPI from "../../../API/class/ClassAPI"
import { selectPage, selectSearch, selectSize, selectStudents, selectTotalSize } from "../../../Redux/selectors/studentSelector";
import AlertDeleteModal from "../../Modal/DeleteComponent";
import UpdateModal from "../../Modal/UpdateComponent";
import Avatar from '@mui/joy/Avatar';
import studentAPI from "../../../API/student/StudentAPI";

function Student(props){

    const [Colunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'clazzName', name:'Lớp', sort:false},
        {dataFiled:'name', name:'Họ Tên', sort:false},
        {dataFiled:'dateOfBirth', name:'Ngày Sinh', sort:false},
        {dataFiled:'sex', name:'Giới Tính', sort:false},
        {dataFiled:'sdt', name:'SĐT', sort:false},
        {dataFiled:'email', name:'Email', sort:false},
        {dataFiled:'clazzCareersName', name:'Ngành', sort:false},
    ]);

    const setStudent = props.setListStudents;
    const setTotalSize = props.setTotalSizeStudents;


    useEffect(()=>{
        const getAllStudent = async ()=>{
            const result = await studentAPI.getAll(props.page,10,'id','desc',props.search);
            setStudent(result.content);
            setTotalSize(result.totalPages);
        }
        getAllStudent();
    },[setStudent,props.page,props.search])


    const findByID = async (id)=>{
        return await classAPI.getByID(id);
    }

    const dataList = props.student.map(
        (item,index)=>
            (
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
                        <UpdateModal getByID={findByID} ID={item.id}/>
                        <AlertDeleteModal studentID={item.id}/>
                    </td>       
                </tr>
            ) 
        )
    
    return(
        <Table 
        title={"Management Student"} 
        datdRow = {dataList}
        TotalSize={props.totalSize}
        Page={props.page}
        TitleColunms={Colunms}/>
    )
}

const mapStateToProps = state =>{
    return{
        page: selectPage(state),
        search: selectSearch(state),
        student: selectStudents(state),
        size: selectSize(state),
        totalSize: selectTotalSize(state),
    }
}

export default connect(mapStateToProps,{setListStudents,setPageStudents,setTotalSizeStudents,setSearchStudents})(Student);