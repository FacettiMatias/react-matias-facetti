import "./CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const CartWidget = () => {
	const {totalProductos} = useContext(CartContext)
	let cantidadCarrito = totalProductos()
	
	return (
		<div className="cart">
			<Badge badgeContent={cantidadCarrito}  className="badge">
				<ShoppingCartOutlinedIcon className="cartSvg" />
			</Badge>
		</div>
	);
};

export default CartWidget;
