/* eslint-disable react/prop-types */
import useDrCoffee from "../hook/useCoffee"
import {Fade} from 'react-reveal';

export default function Producto({i}) {
  const {handleModal,setProductoModal}= useDrCoffee()
  return (
    <Fade left>
    <div className={`border ${i.disponible ? "visible" : "hidden"} text-white font-bold py-3 px-1 flex flex-col  justify-between `}>
        <div>
            <img className="w-5/6 mx-auto" src={`../public/img/${i.imagen}.jpg`} alt="" />
            <p className="text-lg mt-2">{i.nombre}</p>
        </div>
        <div>
            <p className="text-amber-100 text-2xl pb-4">${i.precio}</p>
            <button className=" bg-orange-300 rounded-lg w-full p-2 text-xl text-black hover:bg-amber-200 hover:text-2xl duration-200" type="button"
            onClick={()=>{handleModal();setProductoModal(i);}}
            >ORDENAR</button>
        </div>
    </div>
    </Fade>
  )
}
