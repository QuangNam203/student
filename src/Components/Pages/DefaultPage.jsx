import Navigation from "../Nav/Navigation";
import Table from "../Table/Table";

function DefaultPage({children}){
    return(
        <div className="container">
            <Navigation />
            <div className="content">
                {children}
            </div>
        </div>
    );
}
export default DefaultPage;