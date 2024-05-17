import {createContext, useState} from 'react'


export const CartContext = createContext()
const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const addToCart= (producto)=>{ 
        
        const enCarrito =(id) =>{
          let bool = cart.some (producto =>producto.id === id)
          return bool
        }
        let exist=enCarrito(producto.id)
        if (exist) {
          let nuevoCarrito = cart.map((elemento) =>{
            if(elemento.id === producto.id){
              return{...elemento,cantidad:producto.cantidad}
            }
            else{
              
              return elemento
            }
          })
          setCart(nuevoCarrito)
        }
        
        else{
            setCart([...cart , producto])
          }
        
      
      
    }
    const clearCart = () => {
      setCart([])
    }
    const deleteProducto= (id)=>{
      const nuevoCarrito =cart.filter(product =>product.id !== id)
      setCart(nuevoCarrito)
    }

    const getCantidad= (id) =>{
      let producto =cart.find(elemento =>elemento.id===id)
      if(producto){
        return producto.cantidad
      }else{
        return producto
      }
    }
   
    const precioFinal = () =>{
      let total = cart.reduce((acc,elemento) =>{
        return acc + (elemento.cantidad * elemento.precio)
      },0)
      return total
      
      }
      const totalProductos = () =>{
        let total = cart.reduce((acc,elemento) =>{
          return acc +elemento.cantidad
          
        },0)
        return total
      }
    let data= {cart,addToCart,clearCart,deleteProducto,getCantidad,precioFinal,totalProductos}  
  return (

    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}


export default CartContextProvider