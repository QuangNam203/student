

import './AddStudent.css'

function AddStudent() {
  return (
    <div className='Body_add' >
      <div className='container_add'>
    <div className='title'></div>
    <form >
      <div className='user-details'>
        <div className='input-box'>
          <span className='details'>ten sinh vien</span>
          <input type='text' placeholder='full name' required />
        </div>
        <div className='input-box'>
          <span className='details'>ma sinh vien</span>
          <input type='text' placeholder=' name' required />
        </div>
        <div className='input-box'>
          <span className='details'>ten</span>
          <input type='text' placeholder='selection' required />
        </div>
        <div className='input-box'>
          <span className='details'>phone</span>
          <input type='number' placeholder='only number' required />
        </div>
        <div className='input-box'>
          <span className='details'>nganh</span>
          <input type='text' placeholder='ma nganh' required />
        </div>
        <div className='input-box'>
          <span className='details'>Email</span>
          <input type='text' placeholder='Gmail' required />
        </div>
        <div className='gender-details'>
          <input type='radio' name="gender" id='dot-1'/>
          <input type='radio' name="gender" id='dot-2'/>
          <input type='radio' name="gender" id='dot-3'/>
          <span className='gender-title'>Gender</span>
          <div className='category'>
            <label for="dot-1">
              <span className='dot one'></span>
              <span className='gender'>nam</span>
            </label>
            <label for="dot-2">
              <span className='dot two'></span>
              <span className='gender'>nu</span>
            </label>
            <label for="dot-3">
              <span className='dot three'></span>
              <span className='gender'>other</span>
            </label>
          </div>
        </div>
      </div>
      <div className='button'>
        <input type='submit' value={"them"} />
      </div>
    </form>
  </div></div>
      
    
  );
}

export default AddStudent;