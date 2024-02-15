import { memo } from "react";

function TBody(props){
    const colunmList = props.TitleColunm.map(
        (item,index)=>(
            <th key={index}>
                {item}
                <ion-icon name="arrow-up-outline"></ion-icon>
            </th>)
        )
    
    const dataList = props.datdRow.map(
        (item,index)=>(
            <tr key={index}>
                <td> {item.id} </td>
                <td> {item.className}</td>
                <td> {item.name}</td>
                <td> {item.dateOfBirth} </td>
                <td> {item.sex}</td>
                <td> {item.sdt}</td>
                <td> {item.email}</td>
                <td> {item.course}</td>
                <td> 
                    <ion-icon key={item.id} name="create-outline"></ion-icon> 
                    <ion-icon key={item.id} name="trash-outline"></ion-icon>
                </td>
            </tr>)
        )    

    return(
        <>
            <section className="table__body">
                <table>
                    <thead>
                        <tr>
                            {colunmList}
                            <th>Chức Năng</th>
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
export default TBody;