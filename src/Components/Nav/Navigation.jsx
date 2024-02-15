import { useState } from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Nav(props){
  const [todolist,setTodolist] = useState(
    [
      {title:'Home',icon:'home-outline'},
      {title:'Student',icon:'person-outline'},
      {title:'Score',icon:'chatbox-ellipses-outline'},
      {title:'Class',icon:'bar-chart-outline'},
      {title:'Subject',icon:'cart-outline'},
      {title:'Price',icon:'settings-outline'},
    ]
    );

    const navlist = todolist.map((item,index)=>{
      return(
        <li key={index}>
            <Link to={`/${item.title}`}>
              <div className='icon'><ion-icon name={`${item.icon}`}></ion-icon></div>
              <div className='text'>{item.title}</div>
            </Link>
          </li>
      );
    })

    return(
    <nav className='sidebar'>
      <ul>
        <li className='logo'>
          <Link to="/">
            <div className='icon'><ion-icon name="logo-apple"></ion-icon></div>
            <div className='text'>Website Logo</div>
          </Link>
        </li>
        <div className='Menulist'>
        {navlist}
        </div>
        <div className='bottom'>
          <li>
            <Link to="">
              <div className='icon'>
                <div className='imgBx'>
                    <img src="#" alt=""></img>
                </div>
              </div>
              <div className='text'>Student</div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className='icon'><ion-icon name="log-out-outline"></ion-icon></div>
              <div className='text'>Logout</div>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
    );
}

export default Nav;