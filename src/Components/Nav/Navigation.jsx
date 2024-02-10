
import { useState } from 'react';
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';

function Nav(props){
  const [todolist,setTodolist] = useState(
    [
      {title:'Home',icon:'home-outline'},
      {title:'Profile',icon:'person-outline'},
      {title:'Inbox',icon:'chatbox-ellipses-outline'},
      {title:'Analytics',icon:'bar-chart-outline'},
      {title:'Order',icon:'cart-outline'},
      {title:'Setting',icon:'settings-outline'},
    ]
    );

    const navlist = todolist.map((item,index)=>{
      return(
        <li key={index}>
            <NavLink to={`/${item.title}`}>
              <div className='icon'><ion-icon name={`${item.icon}`}></ion-icon></div>
              <div className='text'>{item.title}</div>
            </NavLink>
          </li>
      );
    })

    return(
    <nav className='sidebar'>
      <ul>
        <li className='logo'>
          <NavLink to="/">
            <div className='icon'><ion-icon name="logo-apple"></ion-icon></div>
            <div className='text'>Website Logo</div>
          </NavLink>
        </li>
        <div className='Menulist'>
        {navlist}
        </div>
        <div className='bottom'>
          <li>
            <NavLink to="">
              <div className='icon'>
                <div className='imgBx'>
                    <img src="#" alt=""></img>
                </div>
              </div>
              <div className='text'>Student</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <div className='icon'><ion-icon name="log-out-outline"></ion-icon></div>
              <div className='text'>Logout</div>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
    );
}

export default Nav;