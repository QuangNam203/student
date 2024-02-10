import logo from './logo.svg';
import './App.css';
import Login from './Compoments/Login';
import StudentManagement from './Compoments/StudentManagement';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
     <div className='header'>
      <div className='infor-navbar'>
        ten - phanquyen 
      </div>
       <div className='search'>
        <p className='search-text'>nhap thong tin can tim kiem</p>
        <input className='search-input' />
        <a className='search-btn' href="#login">  tim kiem</a>
       </div>
     </div>
     <div className='body'>
      <br/>
      <Navbar className='navbar' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">thoát</Nav.Link>
            <Nav.Link href="#features">đổi mật khẩu</Nav.Link>
            <Nav.Link href="#pricing">thông báo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <div className='body-children'>
      <div className='left-home'>
        <ul className='slidebar-menu'>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">quản lý sinh viên</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">quản lý lớp học</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">quản lý môn học</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">quản lý điểm</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">quản lý học phí</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
          <li>{ 
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">giao tiếp và thông báo</Navbar.Brand>
            </Container>
              </Navbar>
              }
          </li>
        </ul>
      </div>
      <div className='content-home'>
              <StudentManagement />
      </div>
      </div>
      
      

     </div>
        {/* <Login/> */}
    </div>
  );
}

export default App;
