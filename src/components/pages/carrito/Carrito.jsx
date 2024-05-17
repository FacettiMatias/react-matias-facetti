import { useContext } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

import Charger from "../../common/charger/Charger";

const Carrito = () => {
	const { cart, clearCart, deleteProducto, precioFinal } =
		useContext(CartContext);

	let precioTotal = precioFinal();
	if (cart.length === 0) {
		Swal.fire({
			icon: "info",
			text: "actualmente no hay nada en el carrito",
		});
		return <h1>el carrito se encuentra vacio</h1>;
	}
	return (
		<>
			{cart.map((product) => (
				<picture className="cartList" key={product.id}>
					<img src={product.imagen} />
					<h1>{product.nombre}</h1>
					<h2>{product.precio}</h2>
					<h3>{product.cantidad}</h3>
					<button
						onClick={() => {
							deleteProducto(product.id);
						}}
					>
						Eliminar
					</button>
				</picture>
			))}

			<h2>Precio final:{precioTotal}</h2>
			<Link to="/checkout">
				<button> finalizar compra</button>
			</Link>
			<button onClick={clearCart}>vaciar carrito</button>
			<Charger/>
		</>
	);
};

export default Carrito;
