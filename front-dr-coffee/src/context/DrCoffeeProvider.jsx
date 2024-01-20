
import axios from "axios";
import { useEffect } from "react";
import { createContext, useState} from "react"
import {toast} from "react-toastify"


const DrCoffeeContext = createContext();

// eslint-disable-next-line react/prop-types
const DrCoffeeProvider = ({children}) => {
const [categorias,setCategorias] = useState([])
const [productos,setProductos] = useState([])
const [categoriaActual,setCategoriaActual] = useState({id:1,nombre:"Café"})
const [productoModal,setProductoModal] = useState({})
const [modal,setModal] = useState(false)
const [carrito,setCarrito]=useState([])
const [editarProducto,setEditarProducto]=useState({})
const [totalCarrito,setTotalCarrito] = useState()
const [animarCarrito,setAnimarCarrito] = useState(false)
const [modalEditarAdmin,setModalEditarAdmin] = useState(false)
const [productoEditarAdmin,setProductoEditarAdmin] = useState({})
const [modalIniciandoSesion,setModalIniciandoSesion] = useState(false)


    const handleModal =()=>{
        setModal(!modal)
        setEditarProducto({})
    }

    const handleAbrirCarrito =()=>{
        setTimeout(() => {
            setAnimarCarrito(!animarCarrito)
        }, 0);

    }

    const eliminarProductoCarrito=(id)=>{
        const res = confirm('¿Seguro que quieres borrar este producto de la orden?')
        if (res) {
            const newProductoCarrito = carrito.filter(i=>i.id != id)
            setCarrito(newProductoCarrito)
        }
        
    }
    const editarProductoCarrito=(producto)=>{
        setProductoModal(producto)
        setEditarProducto(producto)
        setModal(!modal)
    }

    const obtenerCategorias = async ()=>{
        try {
            const res = await axios(`http://localhost:8000/api/categorias`)
            setCategorias(res.data.categorias);
        } catch (error) {
            console.log(error);
        }
    }
    const obtenerProductos = async ()=>{
        try {
            const res = await axios(`http://localhost:8000/api/productos`)
            setProductos(res.data.productos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitOrdenar = async ()=>{
        const token = localStorage.getItem('AUTH_TOKEN')
        setAnimarCarrito(false) 
        try {
            
            await  axios.post('http://localhost:8000/api/pedidos',{
                //son los datos que se mandaran al servidor
                totalCarrito,
                productos: carrito.map(i => {//aqui se escogio solo el id y cantidad del prodcuto del pedido, y se asigno el valor del map en una variable productos
                    return {
                        id: i.id,
                        cantidad: i.cantidad,
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            toast.success("Orden Enviada Correctamente")
            setCarrito([])
        } catch (error) {
            console.log(error);
            toast.error("Error al Enviar la Orden")
            
        }
    }

    //ADMINISTRADOR

    const hanldeCompletarPedido = async(id)=>{
        const token = localStorage.getItem('AUTH_TOKEN')
        const res = confirm("¿Seguro desea completar este pedido?")
        if (res) {
            try {
                await axios.put(`http://localhost:8000/api/pedidos/${id}`,null,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } catch (error) {
                console.log(error);
            } 
        }
        
    }
    const handleAgotarProducto = async(id)=>{
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await axios.put(`http://localhost:8000/api/productos/${id}`,null,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            obtenerProductos()
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalEditarPrecio =(i)=>{
        setModalEditarAdmin(!modalEditarAdmin)
        setProductoEditarAdmin(i)
    }

    const handleEditarPrecioProducto = async(data)=>{
        const token = localStorage.getItem('AUTH_TOKEN')
        const res = confirm('¿Seguro que quieres modificar el precio de este producto?')
        if (res) {
            try {
                await axios.put(`http://localhost:8000/api/productos/${data.id}`,data,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setModalEditarAdmin(false)
                obtenerProductos()
            } catch (error) {
                console.log(error);
            }
        }
        
    }

    useEffect(()=>{
        const preciosCarrito=carrito.map(i=>i.precio)
        const sumaCarrito=preciosCarrito.reduce((acc,des)=>{
            return acc+des;
        },0)
        setTotalCarrito(sumaCarrito.toFixed(2))
    },[carrito])

    useEffect(()=> {
        obtenerCategorias()
        obtenerProductos()
    },[])

    return (
        <DrCoffeeContext.Provider
            value={{
                categoriaActual,
                setCategoriaActual,
                modal,
                handleModal,
                productoModal,
                setProductoModal,
                carrito,
                setCarrito,
                totalCarrito,
                eliminarProductoCarrito,
                editarProductoCarrito,
                editarProducto,
                setEditarProducto,
                categorias,
                productos,
                handleSubmitOrdenar,
                hanldeCompletarPedido,
                handleAgotarProducto,
                handleAbrirCarrito,
                animarCarrito,
                setAnimarCarrito,
                modalEditarAdmin,
                handleModalEditarPrecio,
                handleEditarPrecioProducto,
                productoEditarAdmin,
                setModalIniciandoSesion,
                modalIniciandoSesion

            }}
        >{children}</DrCoffeeContext.Provider>
    )
}

export {
    DrCoffeeProvider
}
export default DrCoffeeContext