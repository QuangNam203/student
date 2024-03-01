import { useEffect, useState } from "react";
import { setListClass, setPageClass, setSearchClass, setTotalSizeClass } from "../../../Redux/reducers/classSlice";
import Table from "../../Table/Table";
import { connect } from "react-redux";
import classAPI from "../../../API/class/ClassAPI"
import { selectPage, selectSearch, selectSize, selectClass, selectTotalSize } from "../../../Redux/selectors/classSelector";
import AlertDeleteModal from "../../Modal/DeleteComponent";
import UpdateModal from "../../Modal/UpdateComponent";
import Avatar from '@mui/joy/Avatar';


function Class(props){
    const [Colunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'clazzName', name:'Lớp', sort:false},
        {dataFiled:'subjectName', name:'môn' , sort:false},
        {dataFiled:'clazzCareersName', name:'Ngành', sort:false},
    ]);

    const setClass = props.setListClass;
    const setTotalSize = props.setTotalSizeCLass;


    useEffect(()=>{
        const getAllClass = async ()=>{
            const result = await classAPI.getAll(props.page,10,'id','desc',props.search);
            setClass(result.content);
            setTotalSize(result.totalPages);
        }
        getAllClass();
    },[setClass,props.page,props.search])


    const findByID = async (id)=>{
        return await classAPI.getByID(id);
    }
    
    const dataList = props.classes.map(
        (item,index)=>
            (
                <tr key={index} onDoubleClick={()=>console.log("ok")}>
                    <td key={index}> {item.id} </td>
                    <td key={index}> {item.clazzName}</td>
                    <td key={index}> {item.subjectName}</td>
                    <td key={index}> {item.clazzCareersName}</td>
                    <td key={index} style={{'textAlign':'center'}}> 
                        <UpdateModal getByID={findByID} ID={item.id}/>
                        <AlertDeleteModal classID={item.id}/>
                    </td>       
                </tr>
            ) 
        )

    return(
        <Table title={"Management Class"}
        datdRow = {dataList}
        TotalSize={props.totalSize}
        Page={props.page}
        TitleColunms={Colunms}
        />
    )
}
const mapStateToProps = state =>{
    return{
        page: selectPage(state),
        search: selectSearch(state),
        classes: selectClass(state),
        size: selectSize(state),
        totalSize: selectTotalSize(state),
    }
}

export default connect(mapStateToProps,{setListClass,setPageClass,setTotalSizeClass,setSearchClass}) (Class);