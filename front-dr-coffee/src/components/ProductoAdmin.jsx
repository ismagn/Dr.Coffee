import useDrCoffee from "../hook/useCoffee"
import {Fade} from 'react-reveal';

/* eslint-disable react/prop-types */


export default function ProductoAdmin({i}) {
    const {handleAgotarProducto,handleModalEditarPrecio} = useDrCoffee()

    

  return (
    <Fade >
    <div className={`border ${i.disponible ? "bg-gray-900" : "bg-slate-400"} rounded-md mt-10 font-bold p-2 flex flex-col gap-2 justify-between`}>
        <div className="flex">
            <div className="w-3/5 flex flex-col text-white justify-around">
                <p>ID: {i.id}</p>
                <p className=" text-slate-300">PRODUCTO: <span className="text-white">{i.nombre}</span></p>
                <p className=" text-slate-300">PRECIO: <span className="text-amber-400">${i.precio}</span> <button className="bg-blue-800 p-1 rounded-md text-xs" type="button" onClick={()=>handleModalEditarPrecio(i)}>Editar</button></p>
            </div>
            <div className="w-2/5 p-1">
                <img className="w-full" src={`../public/img/${i.imagen}.jpg`} alt="" />
            </div>
        </div>
        {i.disponible ? (
            <div>
                <button className="bg-red-500 rounded-lg w-full p-2 text-xl active:bg-red-800" type="button"
                onClick={()=>handleAgotarProducto(i.id)}
                >MARCAR COMO AGOTADO</button>
            </div>
        ) : (
            <div>
                <button className="bg-green-500 rounded-lg w-full p-2 text-xl active:bg-green-700" type="button"
                onClick={()=>handleAgotarProducto(i.id)}
                >MARCAR COMO DISPONIBLE</button>
            </div>
        )}
        
    </div>
    </Fade>
  )
}
