import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from 'swr';
import useDrCoffee from "./useCoffee";



export const useAuth = ({middleware,url})=> {
    const navigate = useNavigate()
    const token = localStorage.getItem('AUTH_TOKEN')//obtienen el token generado en localstroage
    const {setModalIniciandoSesion} = useDrCoffee()

    const {data: user, error, mutate, isLoading} = useSWR('http://localhost:8000/api/user', ()=>
        axios('http://localhost:8000/api/user',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        
        .catch(error =>{
            throw Error(error?.response?.data?.errors)
        })
    )

    const login =async (datos,setErrores) => {
        try {
            setModalIniciandoSesion(true)
            const res = await axios.post('http://localhost:8000/api/login', datos)
            localStorage.setItem('AUTH_TOKEN', res.data.token);//almacena el token en localstorage
            setErrores([])
            await mutate()//es para revalidar
        } catch (error) {
            setModalIniciandoSesion(false)
            setErrores(Object.values(error.response.data.errors));//almacena los errores que cometa el usuario al registrarse
        }
    }
    const registro = async (datos,setErrores) => {
        try {
            setModalIniciandoSesion(true)
            const res = await axios.post('http://localhost:8000/api/registro', datos)
            localStorage.setItem('AUTH_TOKEN', res.data.token);
            setErrores([])
            await mutate()//es para revalidar
        } catch (error) {
            setModalIniciandoSesion(false)
            setErrores(Object.values(error.response.data.errors));//almacena los errores que cometa el usuario al registrarse
        }
    }
    const logout = async () => {
        const res = confirm("¿Seguro que quieres cerrar session?")
        if (res) {
            try {
                await axios.post('http://localhost:8000/api/logout', null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                localStorage.removeItem('AUTH_TOKEN')
                await mutate(undefined)//es para revalidar y evitar bucles
            } catch (error) {
                throw Error(error?.response?.data?.errors)
            }
        }
        
    }

    useEffect(()=>{
        if (middleware==='guest' && user && url) {
            navigate('/')   
        }
        if (middleware==='order' && !user) {
            navigate('/login')   
        }
        if (middleware==='admin' && user && !user.admin ) {
            navigate('/')   
        }
        if (middleware==='admin' && !user) {
            navigate('/')   
        }
        if (middleware==='admin' && user && user.admin ) {
            navigate('/admin')   
        }
        
        if (user) {
            setModalIniciandoSesion(false)
        }
    },[user,error])
    return {
        isLoading,
        login,
        registro,
        logout,
        user,
        error
    }

}
