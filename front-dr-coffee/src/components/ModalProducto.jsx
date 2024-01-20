import { useState } from "react"
import useDrCoffee from "../hook/useCoffee"
import { useAuth } from "../hook/useAuth"
import {toast} from "react-toastify"


function ModalProducto() {
    useAuth({middleware: "order"});
    const {productoModal,setCarrito,carrito,handleModal,editarProducto} = useDrCoffee()
    const [cantidad,setCantidad] = useState(1)

    const handleAñadirCarrito=(e)=>{
        e.preventDefault();

        var carritoActualizado=0;
        
        const productoCarrito = {
            cantidad:cantidad,
            imagen: productoModal.imagen,
        }

        if (editarProducto.id) {
            productoCarrito.id=editarProducto.id
            productoCarrito.nombre=editarProducto.nombre

            const resetearCantidad = editarProducto.precio/editarProducto.cantidad
            const newPrecio = resetearCantidad*cantidad
            productoCarrito.precio = parseFloat(newPrecio)
            toast.success("Orden Actualizada")
        } else {
            productoCarrito.id=productoModal.id
            productoCarrito.nombre=productoModal.nombre

            const newPrecio = productoModal.precio*cantidad
            productoCarrito.precio = parseFloat(newPrecio)
            toast.success("Producto Agregado al Carrito Correctamente")
        }

            carritoActualizado = carrito.filter(i=>i.id !== editarProducto.id)
            setCarrito([...carritoActualizado,productoCarrito])
            handleModal()
        
    }
  return (
    <div className=" flex flex-col gap-2 font-bold">
        <img className="mx-auto w-3/5" src={`../public/img/${productoModal.imagen}.jpg`} alt="" />
        <div className="w-3/5 mx-auto">
        <p className="text-xl">{productoModal.nombre}</p>
        
        {editarProducto.id ? (
            <p></p>
        ):(
            <p className="lg:text-xl">Precio: <span className="text-amber-500">$ {productoModal.precio}</span></p>
        )}
        

        <div  className="flex items-center">
            <p className="font-bold lg:text-xl mr-2">Cantidad: </p>
            <button className="lg:text-2xl font-extrabold bg-blue-500 w-10 pb-1 rounded-full" type="button"
                onClick={()=>{
                    if(cantidad <= 1) return
                    setCantidad(cantidad-1)
                }}
                >-</button>
            
                <p className="text-2xl inline mx-3">{cantidad}</p>
            


            <button className="lg:text-2xl bg-red-500 w-10 pb-1 rounded-full" type="button"
                onClick={()=>{
                    if(cantidad >= 5) return
                    setCantidad(cantidad+1)
                }}
                >+</button>
        </div>
        </div>
        <div className="w-3/5 mx-auto">
            {editarProducto.id ? (
                <button className="bg-indigo-500 w-full p-2 lg:text-2xl rounded-xl text-white" type="button"
                onClick={handleAñadirCarrito}
                >ACTUALIZAR ORDEN</button>
            ) : (
                <button className="bg-indigo-500 w-full p-2 lg:text-2xl rounded-xl text-white" type="button"
                onClick={handleAñadirCarrito}
                >AÑADIR A LA ORDEN</button>
            )}
        </div>
    </div>
  )
}

export default ModalProducto
