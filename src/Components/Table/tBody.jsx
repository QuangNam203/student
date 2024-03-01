import Avatar from '@mui/joy/Avatar';
import { connect } from 'react-redux';
// import { selectPage, selectStudents } from "../../Redux/selectors/studentSelector";
import { setListStudents } from "../../Redux/reducers/studentSlice";
import studentAPI from "../../API/student/StudentAPI";

// import { selectPage, selectClass } from "../../Redux/selectors/classSelector";
import { setListClass } from "../../Redux/reducers/classSlice";
import classAPI from "../../API/class/ClassAPI";

import { selectPage, selectSubject } from "../../Redux/selectors/subjectSelector";
import { setListSubject } from "../../Redux/reducers/subjectSlice";
import subjectAPI from '../../API/Subject/SubjectAPI';

function TBody(props){

    const setStudent = props.setListStudents;
    const setClass = props.setListClass;
    const setSubjet = props.setListSubject;

    const colunmList = props.TitleColunms.map(
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
                        {props.datdRow}
                    </tbody>
                </table>
            </section>
        </>
    );
}
const mapStateToProps = state => {
    return {
        // class: selectClass(state),
        // student : selectStudents(state),
        subject:selectSubject(state),
        page: selectPage(state)
    }
}
export default connect(mapStateToProps,{setListStudents,setListClass,setListSubject})(TBody);