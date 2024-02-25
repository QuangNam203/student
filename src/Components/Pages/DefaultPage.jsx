import SnackbarComponent from "../Modal/SnackbarComponent";
import Navigation from "../Nav/Navigation";
import Table from "../Table/Table";
import {SnackbarContext, TableUpdateContext} from "../Modal/ModalContext";
import { useState } from "react";


function DefaultPage({children}){

    const [open, setOpen] = useState(false)
    const [content,setContent] = useState('')
    const [openUp, setOpenUp] = useState(false)
    const wrap = {open,setOpen,content,setContent}
    const TableUp = {openUp,setOpenUp};
    return(
        <div className="container">
            <Navigation />
            <SnackbarContext.Provider value={wrap}>
                <TableUpdateContext.Provider value={TableUp}>
                    <div className="content">
                        {children}
                        <SnackbarComponent/>
                    </div>
                </TableUpdateContext.Provider>
            </SnackbarContext.Provider>
        </div>
    );
}
export default DefaultPage;