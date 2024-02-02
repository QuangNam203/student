import Nav from './Compoments/Nav/Navigation';
import {Route,Routes} from 'react-router-dom'
import { Home } from './Compoments/Pages/Home';
import './App.css'
import Profile from './Compoments/Pages/proflle/Profile';

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
      </Routes>
      </div>
    </div>
  );
}

export default App;
