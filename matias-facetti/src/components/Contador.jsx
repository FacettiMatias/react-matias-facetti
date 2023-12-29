import React from 'react'
import { useState } from 'react'


const Contador = () => {
    const [cantidad ,setCantidad] = useState (0)

    const incrementar = () => {
        setCantidad (prev => prev +1)
    ;
    }
    const decrementar = () => {
        setCantidad (prev => prev -1)
    }

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <h4> {cantidad} </h4>
        <button onClick={incrementar}>+</button>
    </div>

  )
}

export default Contador