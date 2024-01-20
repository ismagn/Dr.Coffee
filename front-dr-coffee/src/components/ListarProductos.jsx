import Producto from './Producto';
import useDrCoffee from '../hook/useCoffee';

export default function ListarProductos() {
  const {categoriaActual,productos} = useDrCoffee();
  const productosFiltrados= productos.filter(i=>i.categoria_id==categoriaActual.id)
  
  return (
    <div className="px-3 ">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-64 lg:pb-40 h-screen overflow-auto'>
            {productosFiltrados.map(i=> (
              <Producto
              key={i.id}
              i={i}
              />
            ))}
        </div>
    </div>
  )
}
