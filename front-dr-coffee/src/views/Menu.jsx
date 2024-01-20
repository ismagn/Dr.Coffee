import ListarProductos from "../components/ListarProductos"
import Sidebar from "../components/Sidebar"
import Modal from 'react-modal';
import useDrCoffee from "../hook/useCoffee";
import ModalProducto from "../components/modalProducto";
import {Fade} from 'react-reveal';


function Menu() {
    const {modal,handleModal,categoriaActual,animarCarrito} = useDrCoffee()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }
    };

    Modal.setAppElement('#root')

  return (
    <Fade>
        <div className="lg:flex w-full bg-black lg:top-14 fixed">
        <div className={`lg:w-1/5 bg-black text-center transition ${animarCarrito ? "opacity-30" : "opacity-100"}  `} >
            <h1 className="text-white text-2xl font-bold my-5">CATEGORIAS</h1>
            <Sidebar/>
        </div>
        <div className={`w-full bg-gray-900 text-center ${animarCarrito ? "opacity-30" : "opacity-100"}`}>
            <h1 className='text-white text-2xl font-bold text-start m-5 shadow-lg'>{categoriaActual.nombre}</h1>
            <ListarProductos/>
        </div>
        
    
    {modal && (
          <Modal isOpen={modal} style={customStyles}>
            <p className="text-4xl font-bold text-end cursor-pointer text-red-600"
          onClick={handleModal} 
          >X</p> 
          <Fade>
            <ModalProducto/>
          </Fade>
        </Modal>
    )}

    </div>
    </Fade>
    
  )
}

export default Menu
