import ItemCard from "./components/common/ItemCard/ItemCard";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/common/ItemDetail/ItemDetail";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element= {<Layout/>} >
					<Route path="/" element = {<ItemListContainer/>}/>
					<Route path="/itemDetail/:id" element ={<ItemDetail/>}/>
					<Route path="/categorias/:name" element = {<ItemListContainer/>}/>
				</Route>
				<Route path="*" element = {<h1>error 404</h1>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
