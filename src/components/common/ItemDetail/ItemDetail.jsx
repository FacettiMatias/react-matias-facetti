import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { productos } from "../../../products-mock";
import "./itemDetail.css";
const ItemDetail = () => {
	let { id } = useParams();
	const [item, setItem] = useState({});
	useEffect(() => {
		const itemEncontrado = productos.find((producto) => producto.id === +id);
		const getProducto = new Promise((res, rej) => {
			res(itemEncontrado);
		});
		getProducto.then((res) => setItem(res));
	}, [id]);
	console.log(item);
	return (
		<div className="itemDetail">
			<h1>{item.nombre}</h1>
      
			<p>{item.descripcion}</p>
			<div> <img src={item.imagen} alt="" /></div>
      <b>${item.precio}</b>
      <button>Agregar al carrito</button>
		</div>
	);
};

export default ItemDetail;
