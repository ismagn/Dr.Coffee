import { Link } from "react-router-dom"
import {Fade, Zoom} from 'react-reveal';
import useDrCoffee from "../hook/useCoffee";

function Index() {
  const {animarCarrito} = useDrCoffee()

  return (
    <Fade>
    <div className={`${animarCarrito ? "opacity-50" : "opacity-100"}  `}>
        <div className="w-full h-screen header flex gap-12 lg:gap-0 pb-24 flex-col items-center justify-center lg:p-24" >
          <Zoom>
          <div className="w-3/5 md:2/5 lg:w-1/5">
              <img className="w-full mx-auto" src="../public/img/logo-cafe.png" alt="" />
            </div>
          </Zoom>
            
            <Fade bottom>
            <div  className="w-full text-center flex flex-col gap-1  lg:gap-2 mx-auto font-serif italic">
              <h2 className="text-white text-3xl lg:text-7xl font-bold text-center">The Best Coffee Served</h2>
              <h2 className="text-white text-3xl lg:text-5xl font-bold text-center ">&</h2>
              <h2 className="text-white text-3xl lg:text-6xl font-bold text-center">Craving Satisfied</h2>
              <div className="mt-10">
                <Link className=" duration-700 hover:bg-amber-600 bg-orange-300  p-2 lg:p-4 rounded-md font-bold text-4xl lg:text-6xl text-slate-800 border cursor-pointer" to="/menu">MENU</Link>
              </div>
            </div>
            </Fade>
          

        </div>
    </div>
    </Fade>
  )
}

export default Index
