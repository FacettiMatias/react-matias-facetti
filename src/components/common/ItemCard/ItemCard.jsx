import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ nombre, descripcion, precio, imagen, id }) => {
	return (
		<div className="itemCard">
			<h1>{nombre}</h1>
			<b>{descripcion}</b>
			<img src={imagen} />
			<b>{precio}</b>
			<Link to ={`/itemDetail/${id}`}><button>Ver producto</button></Link>
		</div>
	);
};  	

export default ItemCard;
