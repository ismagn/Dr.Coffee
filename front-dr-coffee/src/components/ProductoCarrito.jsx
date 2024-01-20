/* eslint-disable react/prop-types */
import useDrCoffee from "../hook/useCoffee"

export default function ProductoCarrito({i}) {
  const {eliminarProductoCarrito,editarProductoCarrito} = useDrCoffee()

  return (
    <div>
        <div className="bg-gray-900 p-2 rounded-lg my-5 shadow-lg font-semibold">
            <div className="flex gap-3">
              <div className="w-4/5">
                  <p className="text-orange-300 font-bold">{i.nombre}</p>
                  <p className="text-white">Cantidad: {i.cantidad}</p>
                  <p className="text-white">Precio: ${i.precio.toFixed(2)}</p>
              </div>
              <div className="w-1/5">
                  <img className="w-full" src={`../public/img/${i.imagen}.jpg`} alt="" />
              </div>
            </div>
            <div className="flex justify-start gap-2">
                <button className="bg-blue-500 p-1 rounded-md text-white text-sm" type="button" onClick={()=>editarProductoCarrito(i)}>Editar</button>
                <button className="bg-red-500 p-1 rounded-md text-white text-sm" type="button" onClick={()=>eliminarProductoCarrito(i.id)}>Eliminar</button>
            </div>
        </div>
    </div>
  )
}
