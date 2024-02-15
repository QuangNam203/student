import './App.css';
import './Components/Table/styles.css'
import './Components/Pages/Login/styles.css'
import Nav from './Components/Nav/Navigation';
import {Routes, Route} from 'react-router-dom';
// import SignInUpForm from './Components/Pages/Login/SignInUpForm';
import DefaultPage from './Components/Pages/DefaultPage';

import { publicRoutes } from './routers';
import Table from './Components/Table/Table';

function App() {
  return (
  // <SignInUpForm/>
  // <AddStudent/>
    <>
      <Routes>
        {publicRoutes.map((item,index)=>{
          const Page = item.element;
          if(Page.name === 'SignInUpForm'){
            return <Route key={index} path={item.path} element={<Page/>}></Route>
          };
          return <Route key={index} path={item.path} element={<DefaultPage><Page></Page></DefaultPage>}></Route>
        })}
      </Routes>
    </>
  // <div className='container'>
  //   <div className='c-left'>
  //     <Nav/>
  //   </div>
  //   <div className='c-right'>
  //   <Routes>
  //     <Route path='/' element={<Index/>}></Route>
  //     <Route path='/Student' element={<Profile/>}></Route>
  //   </Routes>
  //   </div>
  // </div>
  );
}

export default App;
