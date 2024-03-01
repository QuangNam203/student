import Table from "../../Table/Table";


function Price(props){
    const [Colunms,SetTitleColunm] = useState([
        {dataFiled:'id', name:'ID', sort:false},
        {dataFiled:'subject', name:'môn' , sort:false},
        {dataFiled:'clazzCareersName', name:'Ngành', sort:false},
        {dataFiled:'price', name:'giá' , sort:false},

    ]);

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
        <Table title={"Subject"}/>
    )
}

export default Price;