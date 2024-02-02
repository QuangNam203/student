import './Navigation.css'

function Nav(props){
    return(
    <nav className='sidebar'>
      <ul>
        <li className='logo'>
          <a href='#'>
            <div className='icon'><ion-icon name="logo-apple"></ion-icon></div>
            <div className='text'>Website Logo</div>
          </a>
        </li>
        <div className='Menulist'>
          <li className='active'>
            <a href='#'>
              <div className='icon'><ion-icon name="home-outline"></ion-icon></div>
              <div className='text'>Home</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="person-outline"></ion-icon></div>
              <div className='text'>Profile</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="cart-outline"></ion-icon></div>
              <div className='text'>Inbox</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="bar-chart-outline"></ion-icon></div>
              <div className='text'>Analytics</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="cart-outline"></ion-icon></div>
              <div className='text'>Order</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="settings-outline"></ion-icon></div>
              <div className='text'>Setting</div>
            </a>
          </li>
        </div>
        <div className='bottom'>
          <li>
            <a href='#'>
              <div className='icon'>
                <div className='imgBx'>
                    <img src="#" alt=""></img>
                </div>
              </div>
              <div className='text'>Student</div>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='icon'><ion-icon name="log-out-outline"></ion-icon></div>
              <div className='text'>Logout</div>
            </a>
          </li>
        </div>
      </ul>
      <script src='./Naviagtion.js'></script>
    </nav>
    );
}

export default Nav;