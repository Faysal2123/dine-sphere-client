import { createBrowserRouter } from "react-router-dom";
import Layouts from "../MainLayouts/Layouts";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu/Menu";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../MainLayouts/DashboardLayout";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import Payment from "../pages/Dashboard/Payment/Payment";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts></Layouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'/menu',
               element:<Menu></Menu>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },           
            {
                path:'/register',
                element:<Register></Register>
            },
            

        ],
        
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            { 
                index:true,
            
                element:<MyOrders></MyOrders>
                
            },
            { 
               
                path:'orders',
                element:<MyOrders></MyOrders>
                
            },
            {
                path:'payment',
                element:<Payment></Payment>
            }
        ]
    }
])
export default router