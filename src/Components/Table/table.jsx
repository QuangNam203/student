import './style.css'
import TBody from './tBody';
import THead from './tHead';

function table(){
    return(
            <main class="table" id="customers_table">
                <THead title={"Managament"}/>
                <TBody/>
            </main>

    );
}

export default table;