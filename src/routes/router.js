import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";
import Inventory from "../components/Inventory/Inventory";
import Orders from "../components/Orders/Orders";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
            {
                path: "inventory",
                element: <Inventory></Inventory>
            },
        ],
    },
]);

export default router;