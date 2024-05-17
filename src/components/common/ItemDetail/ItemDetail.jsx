import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import Contador from "../Contador";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection,doc,getDoc } from 'firebase/firestore';
import Swal from "sweetalert2";
const ItemDetail = () => {
	let { id } = useParams();
	const [item, setItem] = useState({});
	const {addToCart,getCantidad} = useContext(CartContext)

	let inicial = getCantidad(+id)
	
	
	useEffect(() => {
		if (inicial>1) {
			setTimeout(() => alert(`ya tenes ${inicial} de este producto agregado`),10)
		}
		let coleccionProductos = collection (db , "productos")
		let refDoc = doc(coleccionProductos, id)
		getDoc(refDoc).then((res) => {
			setItem({id:res.id,...res.data()})
		})
	}, [id])
	
	const onAdd = (cantidad) => {
		let objetoCantidad = {...item,cantidad}
		addToCart(objetoCantidad);
		Swal.fire({
			icon:"success",
			text:" el producto fue agregado al carrito correctamente"
		})
		
	};
	return (
		<div className="itemDetail">
			<h1>{item.nombre}</h1>

			<p>{item.descripcion}</p>
			<div>
				
				<img src={item.imagen}  />
			</div>
			<b>${item.precio}</b>
			
				<Contador stock={item.stock} onAdd={onAdd} inicial={inicial} />
			
		</div>
	);
};

export default ItemDetail;
