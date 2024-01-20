import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../hook/useAuth";
import {Fade} from 'react-reveal';



export default function AdminLayout() {
    const {user,logout} = useAuth({middleware: 'admin'});



  return (
    <>
    <div>
        <Fade top>
        <div className="flex z-50 p-2 justify-between items-center bg-orange-100 fixed top-0 w-full  ">
            <div className="hidden lg:visible w-14 mx-10">
              <Link className="" to="/">
                <img className="" src="../public/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="w-full flex justify-between items-center font-bold gap-5 lg:gap-10 mx-5 lg:mx-10">
              <div className="flex items-center gap-2">
                <Link to="/" className="bg-orange-300 p-2 rounded-md text-sm lg:text-xl border border-white border-1 hover:scale-110 duration-200">Inicio</Link>
                <div>
                  <p className="hidden lg:block lg:text-2xl uppercase opacity-60">: {user?.name} </p>
                </div>
              </div>
              <div>
                    <button type="button" className="text-sm lg:text-lg bg-red-700 text-white p-1 rounded-md hover:scale-110 duration-200"
                    onClick={logout}
                    >Cerrar Sesion</button>
              </div>
            </div>
        </div>
        </Fade>
    </div>
    <div className="w-full lg:flex fixed bg-gray-50 ">
      <Fade top>
        <div className="sidebar w-full lg:w-1/5 mt-10 pt-5 bg-gray-900  text-center">
            <h1 className="text-white lg:text-xl font-bold lg:my-5 shadow-2xl shadow-white">PANEL ADMINISTRADOR</h1>
            <AdminSidebar/>
        </div>
        </Fade>
        
        <div className=" w-full lg:w-5/6 h-screen pb-60">
            <Outlet/>
        </div>

        <div className="p-1 text-xs w-full bg-black text-white text-center fixed bottom-0">
              <p>DrCoffee @2024</p>
        </div>
      
    </div>
    
    </>
    
  )
}
