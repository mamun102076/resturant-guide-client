import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AllServices from "../../Shared/Services/AllServices/AllServices";
import ServiceDetails from "../../Shared/Services/ServiceDetails/ServiceDetails";
import Services from "../../Shared/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://resturant-guide-server.vercel.app/services')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://resturant-guide-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://resturant-guide-server.vercel.app/allservices')
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    }
])