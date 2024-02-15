import { memo} from "react";

function THead(props){  
    return(
        <>
            <section className="table__header">
                <h1>{props.title}</h1>
                    <div className="input-group">
                        <input type="search" placeholder="Search Data..." onChange={()=>props.handleInput()}></input>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                <div className="export__file">
                    <label for="export-file" className="export__file-btn" title="Export File"></label>
                    <input type="checkbox" id="export-file"></input>
                    <div className="export__file-options">
                        <label>Export As &nbsp; &#10140;</label>
                        <label for="export-file" id="toPDF">PDF <img src={"../../images/pdf.png"} alt=""/></label>
                        <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""></img></label>
                        <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""></img></label>
                        <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""></img></label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default THead;