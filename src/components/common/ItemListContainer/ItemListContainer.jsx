import ItemCard from "../ItemCard/ItemCard";
import { productos } from "../../../products-mock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css"


const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	let {name} = useParams()
	console.log(name);
	useEffect(() => {
		let productosFiltrados = productos.filter(producto =>producto.categoria === name)
		console.log(productosFiltrados);
		const getProductos = new Promise((resolve, reject) => {
			if (true) {
				resolve( name ? productosFiltrados :productos)
			} else {
				reject("algo salio mal");
			}
		});
		getProductos
			.then((res) => setItems(res))
			.catch((error) => console.log(error));
	}, [name]);
	return ( <div className="listContainer">
	
	{items.map((items) => {
		return (
			
				<ItemCard key={items.id}
				{...items}
			/>
			
		);
	})}</div>)
};

export default ItemListContainer;
