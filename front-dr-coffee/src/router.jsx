import { createBrowserRouter } from "react-router-dom";

import Index from "./views";
import Layout from "./layouts/Layout";
import Menu from "./views/Menu";
import Login from "./views/Login";
import Registro from "./views/Registro";
import AdminLayout from "./layouts/AdminLayout";
import AdminPedidos from "./views/AdminPedidos";
import AdminProductos from "./views/AdminProductos";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>, 
        children:[
            {
                index: true,
                element: <Index/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registro',
                element: <Registro/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element:<AdminPedidos/>
            },
            {
                path: '/admin/productos',
                element: <AdminProductos/>
            }
        ]
    }
])

export default router