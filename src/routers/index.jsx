import Home from "../Components/Pages/Home"
import SignInUpForm from "../Components/Pages/Login/SignInUpForm"
import Profile from "../Components/Pages/profile/Profile"
import withAuth from "../HOC/withAuth"

const publicRoutes = [
    {
        path: "/login",
        name: "Login",
        element: SignInUpForm
    },
    {
        path: "/",
        name: "Home",
        element: Home
    },
    {
        path: "/Profile",
        name: "Profile",
        element: Profile
    }
]

// private Routes
const privateRoutes = [
    {
        path: "/main/login",
        name: "Login",
        element: withAuth(SignInUpForm)
    }
]

export { publicRoutes , privateRoutes}