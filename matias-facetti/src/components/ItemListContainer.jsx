import React, { useEffect, useState } from 'react'
import { getProductos } from './Asincronia'
import ItemList from './ItemList'

const ItemListContainer = ({saludo}) => {
  const [productps,setProductos] = useState([])

  useEffect (() => {
    getProductos()
    .then(response => {setProductos(response)})
    .catch(error => {
      console.error(error)
        })
  }, [])
  
  return (
    <>
    <h1>{saludo}</h1>
    <ItemList productos = {productos}/>
    </>
  )
}

export default ItemListContainer