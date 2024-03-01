// import SignInUpForm from '../Components/Pages/Login/SignInUpForm'
// import Profile from '../Components/Pages/Profile/Profile'
// import withAuth from '../HOC/withAuth'
import Home from "../Components/Pages/Home"
import SignInUpForm from "../Components/Pages/Login/SignInUpForm"
import Student from "../Components/Pages/Student/index"
import Score from "../Components/Pages/Score/index"
import Class from "../Components/Pages/Class/index"
import Subject from "../Components/Pages/Subject/index"
import Price from "../Components/Pages/Price/index"
import AddStudent from "../Components/StudentManagement/AddStudent"
import ClassManager from "../Components/ClassManager/ClassManager"

export const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/Home',
        element: Home,
    },
    {
        path: '/Student',
        element: Student,
    },
    {
        path: '/Class',
        element: Class,
    },
    {
        path: '/Score',
        element: Score,
    },
    {
        path: '/Subject',
        element: Subject,
    },
    {
        path: '/Price',
        element: Price,
    },
    {
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


export const formData = [
    {
        path: 'Student',
        component: AddStudent
    },
    {
        path: 'Class',
        component: ClassManager
    },
    // {
    //     path: 'Score',
    //     component: AddScore
    // },
    // {
    //     path: 'Subject',
    //     component: AddSubject
    // },
    // {
    //     path: 'Major',
    //     component: AddMajor
    // },
    // {
    //     path: 'Price',
    //     component: AddPrice
    // },
]