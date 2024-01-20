
import useDrCoffee from "../hook/useCoffee"
import ProductoCarrito from "./ProductoCarrito"



export default function ShoppingCart() {
  const {carrito,animarCarrito,totalCarrito,handleSubmitOrdenar}=useDrCoffee()
  return (
    
    <div className={` min-h-screen text-center w-3/4 lg:w-2/5 rounded top-14  right-0 lg:right-10 shadow-2xl fixed bg-white ${animarCarrito ? "visible" : "hidden"}`}>
      <h1 className=" font-bold my-5 text-3xl">ORDEN</h1>
        {carrito.length>0 ? (
          <>
            <div className="carrito-productos overflow-y-auto px-6 mb-2">
            {carrito.map(i=>(
              <>
                <ProductoCarrito
                key={i.id}
                i={i}
                />
              </>
            ))}
            </div>
            <div>
              <h2 className="lg:text-xl font-bold">TOTAL: <span className="text-amber-600 font-extrabold">${totalCarrito}</span></h2>
            </div>
            <div className="m-10">
              <button className="font-bold lg:text-xl  p-2  bg-orange-400 rounded-md " type="button"
              onClick={handleSubmitOrdenar}
              >
                CONFIRMAR ORDEN
              </button>
            </div>
          </>
        ) : (
          <p className="text-xl p-4 font-bold">Aun no has agregado productos a la orden</p>
        )

        }
    </div>
   
  )
}
