import './App.css';
import Nav from './Components/Nav/Navigation';
import Home from './Components/Pages/Home';
import {Routes, Route} from 'react-router-dom';
import Profile from './Components/Pages/profile/Profile';
import StudentManagement from'./Components/Pages/student/StudentManagement'

 function App() {
  return (
    <div className='container'>
      <div className='c-left'>
        <Nav/>
      </div>
      <div className='c-right'>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Inbox' element={<StudentManagement/>}></Route>
      </Routes> 
       </div>
    </div>
  );
}

export default App;
