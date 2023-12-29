import React from 'react'

const Item = ({ id ,  nombre ,precio , marca}) => {
  return (
     <div>
        <h2>{nombre}</h2>

        <h4>{precio}</h4>
        
        <h5>{marca}</h5>
        </div>
  )
}

export default Item