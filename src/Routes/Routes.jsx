import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }
        ]
    }
])