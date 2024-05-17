    import React from 'react'
    import  { useState } from "react";
    

    const Contador = ({stock, inicial=1 ,onAdd}) => {
        const [contador, setContador] = useState(inicial);
    
        const sumar = () => {
            if (contador < stock) {
                setContador(contador + 1);
            } else {
                alert("no hay mas stock");
            }
        };
        const restar = () => {
            if (contador > 0) {
                setContador(contador - 1);
            } else {
                alert("no se puede tener menos de un producto");
            }
        }; 
        return (
        <>
            <button onClick={sumar}>sumar</button>
            <h1>{contador}</h1>
            <button onClick={restar}>restar</button>
            <button onClick={()=> onAdd(contador)}>agregar al carrito</button>
        </>
    );
    };
   

export default Contador