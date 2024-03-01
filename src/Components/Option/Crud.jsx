import { useState } from 'react';
import OptionContext from './OptionContext.jsx';
import {formData} from '../../routers/index.jsx'

import AddStudent from '../StudentManagement/AddStudent.jsx'
import './Crud.css'


function Crud() {
  const [show, setShow] = useState(false);
  const url = window.location.href.split('/')[3]

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  return (
    <div className='option'>
        <div className='addStudent' onClick={handleShow}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        {show && 
        
        formData.map((route) => {
          let Page = AddStudent
          if(route.path === url){
            Page = route.component
            return <div  className='hinden_content'>
          <br/>
          <OptionContext.Provider value={handleShow}>
            <Page/>
          </OptionContext.Provider>
          
      </div>
          }
          else console.log("error")
        })
        
        }
        
    </div>
    
  );
}

export default Crud;