import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import {Fade, Zoom} from 'react-reveal';
import useDrCoffee from "../hook/useCoffee";



export default function Login() {
    const emailRef = createRef();
    const passwordRef = createRef();
    const {modalIniciandoSesion} = useDrCoffee()

    const {login} = useAuth({
        middleware: 'guest',
        url: '/'
    })
    const [errores,setErrores] = useState([])

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const datos = {
            email:emailRef.current.value,
            password:passwordRef.current.value,
        }
        login(datos,setErrores)
    }
  return (
    <Fade>
    <div className="h-screen bg-black top-0 right-0 w-full fixed ">
    <div className=" lg:w-3/5 mx-2 lg:mx-auto my-40 bg-white p-2 shadow-xl rounded-md">
        <Zoom>
        <div className="  bg-black mx-auto rounded-full w-14 md:w-20 lg:w-24">
            <img className="w-full py-2" src="../public/img/logo-cafe.png" alt="" />
        </div>
        </Zoom>
        <div className="px-10 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold ">INICIAR SESION</h1>
        </div>
        <div>
            <form action="" className="p-5"
            onSubmit={handleSubmit}
            noValidate
            >
                {errores && errores.map(i => <p key={i} className="bg-red-600 mt-1 text-white font-bold text-center">{i}</p>)}
                <div className="w-full">
                    <label className="font-bold" htmlFor="email">E-MAIL:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="email" id="email" name="email" ref={emailRef}/>
                </div>
                <div className="w-full">
                    <label className="font-bold" htmlFor="password">Contraseña:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="password" id="password" name="password" ref={passwordRef}/>
                </div>

                {modalIniciandoSesion ? (
                    <p className="text-xl font-bold animate-pulse text-center">INICIANDO SESION... </p>
                ) : (
                <>
                <input className={`w-full font-bold text-black text-xl bg-amber-500 h-10 my-2 cursor-pointer ${modalIniciandoSesion ? "invisible" : " visible "}`} type="submit" value="INICIAR SESION" />
                <Link className="underline" to="/registro">¿No tienes cuenta? Crea una</Link>
                </>
                )}
            </form>
        </div>
    </div>
    </div>
    </Fade>
  )
}
