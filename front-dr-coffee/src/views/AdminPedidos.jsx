import axios from "axios";
import useSWR from "swr";
import useDrCoffee from '../hook/useCoffee';
import {Fade} from 'react-reveal';

export default function AdminPedidos() {
    const {hanldeCompletarPedido} = useDrCoffee()

    const token = localStorage.getItem('AUTH_TOKEN')

    const fetcher = ()=> axios('http://localhost:8000/api/pedidos',{
    headers: {
        Authorization: `Bearer ${token}`
    }
    
    })
    const {data, error,isLoading} = useSWR('http://localhost:8000/api/pedidos', fetcher,{refreshInterval: 1000})//refresInterval sirve para hacer la peticion cada cierto tiempo


    if (isLoading) {
        return 'Cargando...'
    }
    if (error) {
        return 'ERROR AL CARGAR LOS PEDIDOS'
    }

    return (
        
        <div>
            <h1 className="lg:text-3xl  font-bold text-center shadow-xl my-5 lg:mt-20">GESTIONAR PEDIDOS</h1>
            <Fade>
            <div className=" grid lg:grid-cols-3  gap-2 p-3 overflow-auto max-h-screen pb-72 lg:pb-40">
                {data.data.pedidos.map(i=>(
                    <div key={i.id} className="p-2 text-sm flex flex-col justify-between bg-amber-50  font-bold shadow-lg border-4 border-amber-400 ">
                    <div>
                        <p >Pedido: {i.id}</p>
                        <p >Cliente: <span className="font-normal">{i.user.name}</span></p>
                    </div>
                    <div>
                    <h3 className="">{i.productos.map(i => (
                    <div key={i.id} className="bg-amber-100 p-2 my-2 shadow-md">
                        <p className="text-xs ">ID:  {i.id}</p>
                        <p className=" text-amber-700 ">{i.nombre}</p>
                        <p className="">Cantidad: <span className="text-green-500">{i.pivot.cantidad}</span></p>
                    </div>
                    ))}
                    </h3>
                    </div>
                    
                    <div>
                        <div>
                            <p className="font-bold text-red-700 p-2 text-center">Total: ${i.total}</p>
                        </div>
                        <button type="button" className="py-2 w-full my-2 bg-green-500 rounded-lg cursor-pointer active:bg-green-700"
                        onClick={()=>hanldeCompletarPedido(i.id)}
                        >MARCAR COMO COMPLETADO</button>
                    </div>
                </div>
                ))}
            </div>
            </Fade>
        </div>
    )
    }
