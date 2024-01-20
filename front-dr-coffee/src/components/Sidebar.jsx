
//import {categoria} from '../data/categorias'
import useDrCoffee from '../hook/useCoffee';
import Categoria from './Categoria';


export default function Sidebar() {

  const {categorias} = useDrCoffee()
  
  return (
    <div>
      
        <div className='px-4  flex justify-center lg:block lg:mt-14'>
            {categorias.map(i=>(
                <Categoria
                i={i}
                key={i.id}
                />
            ))}
        </div>
    </div>
  )
}
