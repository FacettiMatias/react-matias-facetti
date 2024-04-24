import CartWidget from "../Cart/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
		<Link to="/">	<div><img src="ninja.png" className="logoImg" /></div> </Link>
			<ul className="NavMenu">
				<li> <Link to ="/categorias/juegos">Juegos</Link> </li>
				<li><Link to ="/categorias/auriculares">Auriculares</Link> </li>
				<li><Link to ="/categorias/mouses">Mouses</Link> </li>
			</ul>

			<input type="search" className="searchBar" />

			<CartWidget />
		</nav>
	);
};

export default Navbar;
