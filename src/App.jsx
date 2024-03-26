import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting={200} />
		</>
	);
};

export default App;
