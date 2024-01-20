import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="">
        <nav className="w-full flex   justify-center lg:flex-col gap-5 py-5 lg:mt-12 uppercase">
            <Link className="bg-orange-300 w-2/5 lg:w-full p-2 lg:text-xl text-slate-700 font-bold hover:bg-orange-500  duration-200" to='/admin'>Gestionar Pedidos</Link>
            <Link className="bg-slate-500 w-2/5 lg:w-full p-2 lg:text-xl text-white font-bold hover:bg-slate-700 duration-200 " to='/admin/productos'>Gestionar Productos</Link>
        </nav>
    </div>
  )
}
