import ModalEditarProducto from '../components/ModalEditarProducto';
import ProductoAdmin from '../components/ProductoAdmin';
import useDrCoffee from '../hook/useCoffee';

export default function AdminProductos() {
  const {productos,modalEditarAdmin} = useDrCoffee();
  return (
    <div>
      <h1 className='text-center my-5 lg:mt-14 lg:text-3xl font-bold shadow-lg'>GESTIONAR PRODUCTOS</h1>
        <div className=''>
        {modalEditarAdmin && (
        <div className='fixed w-full bg-black z-50 opacity-95 left-0 top-0 p-5 lg:p-20 h-screen flex justify-center items-center'>
          <ModalEditarProducto/>
        </div>
        )}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 px-2 pb-64 lg:pb-52 h-screen overflow-auto'>
            {productos.map(i=> (
              <ProductoAdmin
              key={i.id}
              i={i}
              />
            ))}
        </div>
      
    </div>
  )
}
