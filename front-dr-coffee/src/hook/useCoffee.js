import { useContext } from "react";
import DrCoffeeContext from "../context/DrCoffeeProvider";

//se crea un hook perzonalizado para poder utilizar lo valores del prop global que se creo
const useDrCoffee = () => {
    return useContext(DrCoffeeContext)
}

export default useDrCoffee