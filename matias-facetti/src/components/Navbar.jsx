import React from 'react'
import "./nav.css"
import Cartwidget from './Cartwidget'
const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className='brand'>Matigames</h1>
        <ul>
            <li>perifericos</li>
            <li>juegos</li>
            <li>sillas gamer</li>
            <li>ofertas</li>
        </ul>
        <Cartwidget cantidad={3}/>
    </nav>
  )
}

export default Navbar