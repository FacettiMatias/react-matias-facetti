import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting= "bienvenidos a mi pagina web"/>
		</>
	);
};

export default App;
