import { memo } from "react";

function TBody(props){
    const colunmList = props.TitleColunm.map(
        (item,index)=>(
            <th key={index}>
                {item.title}
                <ion-icon name="arrow-up-outline"></ion-icon>
            </th>)
        )
    
    const dataList = props.datdRow.map(
        (item,index)=>(
            <tr key={index}>
                <td> {index} </td>
                <td> <img className="img" src="../../images/Alex Gonley.jpg" alt=""></img> {item.Customer}</td>
                <td> {item.Location}</td>
                <td>  {item.OrderDate} </td>
                <td>
                    <p className="status delivered"> {item.Status}</p>
                </td>
                <td> <strong>  {item.Amount} </strong></td>
            </tr>)
        )    

    return(
        <>
            <section className="table__body">
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
export default TBody;