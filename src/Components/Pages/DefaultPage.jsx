import SnackbarComponent from "../Modal/SnackbarComponent";
import Navigation from "../Nav/Navigation";
import Table from "../Table/Table";
import SnackbarContext from "../Modal/ModalContext";
import { useState } from "react";


function DefaultPage({children}){

    const [open, setOpen] = useState(false)

    const wrap = {open,setOpen}

    return(
        <div className="container">
            <Navigation />
            <SnackbarContext.Provider value={wrap}>
                <div className="content">
                    {children}
                    <SnackbarComponent/>
                </div>
            </SnackbarContext.Provider>
        </div>
    );
}
export default DefaultPage;