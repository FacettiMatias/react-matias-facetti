import ItemCard from "./components/common/ItemCard/ItemCard";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/common/ItemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import Carrito from "./components/pages/carrito/Carrito";
import CartContextProvider from "./context/CartContext";

const App = () => {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/itemDetail/:id" element={<ItemDetail />} />
						<Route path="/categorias/:name" element={<ItemListContainer />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/carrito" element={<Carrito />} />
						<Route path="*" element={<h1>error 404</h1>} />
					</Route>
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
};

export default App;
