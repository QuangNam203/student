import { useState } from 'react';
import OptionContext from './OptionContext.jsx';

import AddStudent from '../StudentManagement/AddStudent.jsx'
import './Crud.css'

function Crud() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  return (
    <div className='option'>
        <div className='addStudent' onClick={handleShow}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        {show && 
        <div  className='hinden_content'>
            <br/>
            <OptionContext.Provider value={handleShow}>
              <AddStudent/>
            </OptionContext.Provider>
        </div>
        
        }
        
    </div>
    
  );
}

export default Crud;