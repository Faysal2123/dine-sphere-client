import { createBrowserRouter } from "react-router-dom";
import Layouts from "../MainLayouts/Layouts";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu/Menu";

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
        ]
    }
])
export default router