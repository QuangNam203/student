
import { useEffect, useState } from "react";
import { setListSubject, setPageSubject, setSearchSubject, setTotalSizeSubject } from "../../../Redux/reducers/subjectSlice";
import Table from "../../Table/Table";
import { connect } from "react-redux";
import subjectAPI from "../../../API/Subject/SubjectAPI"
import { selectPage, selectSearch, selectSize, selectSubject, selectTotalSize } from "../../../Redux/selectors/subjectSelector";
import AlertDeleteModal from "../../Modal/DeleteComponent";
import UpdateModal from "../../Modal/UpdateComponent";


function Subject(props){
    const [Colunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'clazzName', name:'Lớp', sort:false},
        {dataFiled:'credit', name:'số tín', sort:false},
    ]);

   
    const setSubject = props.setListSubject;
    const setTotalSize = props.setTotalSizeSubject;


    useEffect(()=>{
        const getAllSubject = async ()=>{
            const result = await subjectAPI.getAll(props.page,10,'id','desc',props.search);
            setSubject(result.content);
            setTotalSize(result.totalPages);
        }
        getAllSubject();
    },[setSubject,props.page,props.search])


    const findByID = async (id)=>{
        return await subjectAPI.getByID(id);
    }
    
    const dataList = props.subjects.map(
        (item,index)=>
            (
                <tr key={index} onDoubleClick={()=>console.log("ok")}>
                    <td key={index}> {item.id} </td>
                    <td key={index}> {item.subjectName}</td>
                    <td key={index}> {item.credit}</td>
                    <td key={index} style={{'textAlign':'center'}}> 
                        <UpdateModal getByID={findByID} ID={item.id}/>
                        <AlertDeleteModal subjectID={item.id}/>
                    </td>       
                </tr>
            ) 
        )

    return(
        <Table title={"Management Subject"}
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
        subjects: selectSubject(state),
        size: selectSize(state),
        totalSize: selectTotalSize(state),
    }
}

export default connect(mapStateToProps,{setListSubject,setPageSubject,setTotalSizeSubject,setSearchSubject}) (Subject);