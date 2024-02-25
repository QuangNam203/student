import {useEffect, useState } from "react";
import Table from "../../Table/Table";
import ScoreAPI from "../../../API/Score/ScoreAPI"
import { connect } from "react-redux";
import { setListScore, setPageScore, setSearchScore, setSizeScore, setTotalSizeScore } from "../../../Redux/reducers/scoreSlice";
import {selectPage, selectScores, selectSearch, selectSize, selectTotalSize} from "../../../Redux/selectors/scoreSelector"
import AlertDeleteModal from "../../Modal/DeleteComponent";
import UpdateModal from "../../Modal/UpdateComponent";
import Avatar from '@mui/joy/Avatar';


function Score(props){

    const [Colunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'studentId', name:'Ma Sinh Vien', sort:false},
        {dataFiled:'studentName', name:'Họ Tên', sort:false},
        {dataFiled:'subjectName', name:'Môn Học', sort:false},
        {dataFiled:'firstScore', name:'Chuyên Cần', sort:false},
        {dataFiled:'midScore', name:'Giữa Kì', sort:false},
        {dataFiled:'finalScore', name:'Cuối kì', sort:false},
    ]);

    const setScore = props.setListScore;
    const setTotalSize = props.setTotalSizeScore;

    useEffect(()=>{
        const getAllScore = async ()=>{
            const result = await ScoreAPI.getAll(props.page,10,'id','desc',props.search);
            setScore(result.content);
            setTotalSize(result.totalPages);
        }
        getAllScore();
    },[setScore,props.page,props.search])

    const findByID = async (id)=>{
        return await ScoreAPI.getByID(id);
    }


    const dataList = props.score.map(
        (item,index)=>
            (
                <tr key={index} onDoubleClick={()=>console.log("ok")}>
                    <td key={index}> {item.id} </td>
                    <td key={index}> {item.studentId}</td>
                    <td key={index}> <Avatar className="img"></Avatar> {item.studentName} </td>
                    <td key={index}> {item.subjectName}</td>
                    <td key={index}> {item.firstScore}</td>
                    <td key={index}> {item.midScore}</td>
                    <td key={index}> {item.finalScore}</td>
                    <td key={index} style={{'textAlign':'center'}}> 
                        <UpdateModal getByID={findByID} ID={item.id}/>
                        <AlertDeleteModal studentID={item.id}/>
                    </td>       
                </tr>
            ) 
        )

    return(
        <Table 
        title={"Score"} 
        datdRow = {dataList}
        TotalSize={props.totalSize}
        Page={props.page}
        TitleColunms={Colunms}/>
    )
}

const mapStateToProps = state =>{
    return{
        score: selectScores(state),
        page: selectPage(state),
        totalSize: selectTotalSize(state),
        size: selectSize(state),
        search: selectSearch(state)
    }
}

export default connect(mapStateToProps,
    {setListScore,setPageScore,setSizeScore,setTotalSizeScore,setSearchScore})
    (Score);