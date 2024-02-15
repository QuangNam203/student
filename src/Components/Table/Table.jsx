import { useCallback,useEffect,useMemo,useState } from "react";
import THead from './THead';
import TBody from './TBody';
import studentAPI from "../../api/student/StudentAPI";

function Table(){
    
    const search = document.querySelector('.input-group input'),
        table_rows = document.querySelectorAll('tbody tr'),
        table_headings = document.querySelectorAll('thead th');
    
    const [TitleColunms,SetTitleColunm] = useState([
        'ID','Lớp','Họ Tên','Ngày Sinh','Giới Tính','SĐT','Email','Ngành',
    ]);
    const [DatdRows, SetDataRow] = useState([])
        
    useEffect(()=>{
        const getAllStudent = async ()=>{
            const result = await studentAPI.getAll();
            console.log(result);

            SetDataRow(result.content);
        }
        getAllStudent();
    },[])

    const searchTable = ()=> {
        table_rows.forEach((row, i) => {
            let table_data = row.textContent.toLowerCase(),
                search_data = search.value.toLowerCase();
    
            row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
            row.style.setProperty('--delay', i / 25 + 's');
        })
    
        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
        });
    }

    table_headings.forEach((head, i) => {
        let sort_asc = true;
        head.onclick = () => {
            table_headings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');
    
            document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
            table_rows.forEach(row => {
                row.querySelectorAll('td')[i].classList.add('active');
            })
    
            head.classList.toggle('asc', sort_asc);
            sort_asc = head.classList.contains('asc') ? false : true;
    
            sortTable(i, sort_asc);
        }
    })

    function sortTable(column, sort_asc){
        [...table_rows].sort((a, b) => {
            let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
                second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();
    
            return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
        })
            .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
    }
    return(
            <main className="table" id="customers_table">
                <THead 
                    title={"Managament"} 
                    handleInput={searchTable}/>
                <TBody TitleColunm={TitleColunms} datdRow={DatdRows}/>
            </main>

    );
}

export default Table;