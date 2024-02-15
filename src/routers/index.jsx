// import SignInUpForm from '../Components/Pages/Login/SignInUpForm'
// import Profile from '../Components/Pages/Profile/Profile'
// import withAuth from '../HOC/withAuth'
import Home from "../Components/Pages/Home"
import SignInUpForm from "../Components/Pages/Login/SignInUpForm"
import Table from "../Components/Table/Table"


export const publicRoutes = [
    {
        path: '/',
        element: Table,
    },
    {
        path: '/Home',
        element: Home,
    },{
        path: '/Login',
        element: SignInUpForm,
    },
]

// private Routes
export const privateRoutes = [
    {
        path: '/main/login',
        name: 'Login',
        element:''
    }
]