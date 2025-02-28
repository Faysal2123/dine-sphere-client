import { createBrowserRouter } from "react-router-dom";
import Layouts from "../MainLayouts/Layouts";
import Home from "../components/Home/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts></Layouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router