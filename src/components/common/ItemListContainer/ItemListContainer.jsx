import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import Charger from "../charger/Charger";
import { db } from "../../../firebaseConfig";
import { collection, getDocs,query,where } from "firebase/firestore";
const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	let { name } = useParams();

	useEffect(() => {

		const coleccionProductos = collection (db,"productos")
		let consulta = coleccionProductos
		if (name) {
			 consulta = query(coleccionProductos,where("categoria","==" , name))
		}

		
		getDocs(consulta).then((res) =>{
			let nuevoArray = res.docs.map((doc) =>{
				return{id:doc.id, ...doc.data()}
				
			})
			setItems(nuevoArray)
		})
		
		

	}, [name]);

	if (items.length === 0) {
		return (
			<div className="itemCharger">
			<Charger className =".charger"/>
			<Charger/>
			<Charger/>
			</div>

		);
	}
	return (
		<div className="listContainer">
			{items.map((items) => {
				return <ItemCard key={items.id} {...items} />;
			})}
		</div>
	);
};

export default ItemListContainer;
