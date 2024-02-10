import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import AddStudent from './Compoments/AddStudent';
import StudentManagement from './Compoments/StudentManagement';
import ClassManagement from './Compoments/ClassManagement';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> a28b7ef346e02e2260688ac0a8c565af49a3450c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <App /> */}
    {/* <AddStudent/> */}
    {/* <StudentManagement/> */}
    <ClassManagement/>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> a28b7ef346e02e2260688ac0a8c565af49a3450c
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
