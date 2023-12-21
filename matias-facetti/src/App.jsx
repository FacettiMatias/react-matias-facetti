import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'




function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={"Bienvenidos a mi pagina"}/>
    </>
  )
}

export default App
