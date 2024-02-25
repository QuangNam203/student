import Table from "../../Table/Table";


function Class(props){

    // const setStudent = props.setListStudents;
    // const setPage = props.setPageStudents;
    // const setTotalSize = props.setTotalSizeStudents;

    // useEffect(()=>{
    //     const getAllStudent = async ()=>{
    //         const result = await studentAPI.getAll(props.page,10,'id','desc',props.search);
    //         setStudent(result.content);
    //         setTotalSize(result.totalPages);
    //     }
    //     getAllStudent();
    // },[setStudent,props.page,props.search])

    // const handleChangePage = async (event, value) => {
    //     setPage(value);
    // };

    return(
        <Table title={"Management Class"}/>
    )
}

export default Class;