import { createRef, useState } from "react";
import useDrCoffee from "../hook/useCoffee";
import {Fade} from 'react-reveal';


export default function ModalEditarProducto() {
    const newPrecioRef = createRef()
    const {handleModalEditarPrecio,productoEditarAdmin,handleEditarPrecioProducto} = useDrCoffee()
    console.log(productoEditarAdmin);



   const handleEditarProducto =(e)=>{
        e.preventDefault()

        const objEditarProducto = {
            id:productoEditarAdmin.id,
            newPrecio:parseFloat(newPrecioRef.current.value)
        }
        
        handleEditarPrecioProducto(objEditarProducto)

   }

  return (
    <Fade >
    <div className="w-full md:w-4/5 lg:w-2/3 bg-white lg:p-5">
        <div className="text-end">
            <button className="text-red-500 text-2xl p-2  rounded-full font-extrabold" type="button" onClick={handleModalEditarPrecio}>X</button>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-center text-amber-700">{productoEditarAdmin.nombre}</h1>
        </div>
        <div className="my-10 text-center w-full">
            <label className="w-full lg:w-1/2 px-2 text-xl font-bold" htmlFor="newPrecio">NUEVO PRECIO: </label>
            <input className="w-2/3 md:w-1/4 lg:w-1/4 border border-amber-700 text-center" type="number" name="" id="newPrecio" ref={newPrecioRef} />
        </div>
        <div className="text-center mb-5">
            <input type="button" className="w-3/4 rounded-md cursor-pointer text-white font-bold p-2 bg-amber-500" onClick={handleEditarProducto} value="Actualizar" />
        </div>
    </div>
    </Fade>
  )
}
