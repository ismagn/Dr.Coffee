/* eslint-disable react/prop-types */
import useDrCoffee from "../hook/useCoffee"

export default function Categoria({i}) {
    const {setCategoriaActual} = useDrCoffee()

    
  return (
    <div className="p-1 lg:p-0 hover:scale-105 duration-200">
        <button className="w-full bg-orange-100 flex lg:my-6 p-1 rounded"
        onClick={()=>setCategoriaActual(i)}
        >
            <img className="w-0 lg:w-1/6 lg:mx-3" src={`../public/img/icono_${i.icono}.svg`} alt="" />
            <p className="text-sm lg:text-xl lg:font-bold" type="button"> {i.nombre}</p>
        </button> 
    </div>
  )
}
