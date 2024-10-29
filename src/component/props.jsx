//import
import { useEffect, useState } from 'react';
import './props.css';


//funcion / clase
const Props = (props) => {
    //Logica
    const [contador, setContador] = useState(0)
    
    
    const sumar = () => {
        if(contador < 10){
        setContador(contador +1); 
    }
}
    
    const restar = () => {
        if(contador > 0){
        setContador(contador -1);
    }
}
    
useEffect(() => {
    console.log("El componente se inicio")
    return () => {
        console.log("El componente se finalizo")
      }
},[])
    
    //Renderizar
    return (
        <div className="props">
            <h1>Esto es un componente {props.saludo}</h1>
            <p>Esto es el {props.despedida}</p>
            <button onClick={sumar}>sumar</button>
            <p>{contador}</p>
            <button onClick={restar}>restar</button>
        </div>
    )
}

//export
export default Props;