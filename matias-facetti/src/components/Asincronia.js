const productos = [
    {id :1 ,nombre : "god of war ragnarok ",  precio : 500, marca :"sony"},
    {id : 2 ,  nombre :"silla gamer dreizt" , precio:800 ,marca: "dreizt"},
    {id :3 ,  nombre :"mouse redragon hydra" , precio: 300,marca: "redragon"}
]
export const getProductos = () =>{
 return new Promise ((resolve) => {
setTimeout (() =>{
    resolve (productos)
},2000)
 })
}