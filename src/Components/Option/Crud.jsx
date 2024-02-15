import { useState } from 'react';

import './Crud.css'

function Crud() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='option'>
        <button onClick={handleShow}>option</button>
        {show && 
        
        <div  className='hinden_content'>
            nội dung hiển thị
            {<button onClick={handleClose}>X</button>}
            1 là form ở đây 
            2 là các nút hiển thị chức năng thêm sửa xóa ở đây
        </div>
        
        }
        
    </div>
    
  );
}

export default Crud;