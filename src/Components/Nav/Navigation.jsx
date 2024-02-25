import { useState } from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { selectUser } from '../../Redux/selectors/userSelector';
import { publicRoutes } from '../../routers';

function Nav(props){
  const [todolist,setTodolist] = useState(
    [
      {title:'Home',icon:'home-outline',name:'Home'},
      {title:'Student',icon:'people-outline',name:'Student'},
      {title:'Score',icon:'chatbox-ellipses-outline',name:'Score'},
      {title:'Class',icon:'home-outline',name:'Class'},
      {title:'Subject',icon:'library-outline',name:'Subject'},
      {title:'Price',icon:'pricetag-outline',name:'Price'},
    ]
    );

    const navlist = todolist.map((item,index)=>{
      return(
        <li key={index}>
          <NavLink to={`/${item.title}`}>
            <div className='icon'><ion-icon name={`${item.icon}`}></ion-icon></div>
            <div className='text'>{item.name}</div>
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
const mapStateToProps = state =>{
  return{
    user: selectUser(state)
  }
}


export default connect(mapStateToProps,null)(Nav);