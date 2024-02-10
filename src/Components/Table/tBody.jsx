import { useState } from "react";

function tBody(props){

    const [TitleColunm,setTitleColunm] = useState([
        {title:'Id'},{title:'Customer'},{title:'Location'},{title:'Order Date'},{title:'Status'},{title:'Amount'},
    ]);
    const [datdRow, setDataRow] = useState([
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
        {Customer:'Zinzu Chan Lee',Location:'Seoul',OrderDate:'17 Dec, 2022',Status:'Delivered',Amount:'$128.90'},
    ])

    const colunmList = TitleColunm.map(
        (item,index)=>
            <th key={index}>
                {item.title}
            </th>
        )
    
    const dataList = datdRow.map(
        (item,index)=>
            <tr key={index}>
                <td> {index} </td>
                <td> <img src="" alt=""></img> {item.Customer}</td>
                <td> {item.Location}</td>
                <td>  {item.OrderDate} </td>
                <td>
                    <p class="status delivered"> {item.Status}</p>
                </td>
                <td> <strong>  {item.Amount} </strong></td>
            </tr>
        )    

    return(
        <>
            <section class="table__body">
                <table>
                    <thead>
                        <tr>
                            {colunmList}
                        </tr>
                    </thead>
                    <tbody>
                        {dataList}
                    </tbody>
                </table>
            </section>
        </>
    );
}
export default tBody;