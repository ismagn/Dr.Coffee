import { createRef,useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../hook/useAuth";
import {Fade, Zoom} from 'react-reveal';
import useDrCoffee from "../hook/useCoffee";

export default function Registro() {

    //estas variables se usan para leer el valor de los campos que escriba el usuario
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const {registro} = useAuth({middleware:'guest', url:'/'})
    const [errores,setErrores] = useState([])
    const {modalIniciandoSesion} = useDrCoffee()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const datos = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation:passwordConfirmationRef.current.value
        }
        registro(datos,setErrores)
    }

  return (
    <Fade>
    <div className="h-screen bg-black top-0 right-0 w-full fixed">
    <div className=" lg:w-3/5 mx-2 lg:mx-auto my-20 bg-white p-2 shadow-xl rounded-md">
        <Zoom>
        <div className="  bg-black mx-auto rounded-full w-14">
            <img className="w-full py-2" src="../public/img/logo-cafe.png" alt="" />
        </div>
        </Zoom>
        <div className=" text-center">
            <h1 className="text-3xl lg:text-4xl font-bold">CREAR CUENTA</h1>
            <p className="font-bold text-sm lg:text-base">llena este formulario para crear una cuenta</p>
        </div>
        <div>
            <form action="" className="p-5"
                onSubmit={handleSubmit}
                noValidate
            >
                {errores && errores.map(i => <p key={i} className="bg-red-600 mt-1 text-white font-bold text-center">{i}</p>)}
                <div className="w-full">
                    <label className="font-bold" htmlFor="usuario">Nombre de usuario:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="text" id="usuario" name="usuario" ref={nameRef}/>
                </div>
                <div className="w-full">
                    <label className="font-bold" htmlFor="email">E-MAIL:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="email" id="email" name="email" ref={emailRef}/>
                </div>
                <div className="w-full">
                    <label className="font-bold" htmlFor="password">Contraseña:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="password" id="password" name="password" ref={passwordRef} />
                </div>
                <div className="w-full">
                    <label className="font-bold" htmlFor="password_confirmation">Confirmar Contraseña:</label>
                    <input className="mb-5 text-center block w-full h-10 border-2" type="password" id="password_confirmation" name="password_confirmation" ref={passwordConfirmationRef} />
                </div>
                {modalIniciandoSesion ? (
                    <p className="text-xl font-bold animate-pulse text-center">REGISTRANDO USUARIO... </p>
                ) : (
                    <>
                    <input className={`w-full bg-amber-500 h-10 my-2 font-bold text-xl cursor-pointer ${modalIniciandoSesion ? "invisible" : " visible "}`} type="submit" value="CREAR CUENTA" />
                    <Link className="underline" to="/login">¿Ya tienes una cuenta? Inicia sesion</Link> 
                    </>
                )}
                
            </form>
        </div>
    </div>
    </div>
    </Fade>
  )
}

