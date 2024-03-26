import CartWidget from "../Cart/CartWidget";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<img src="ninja.png" className="logoImg" />
			<ul className="NavMenu">
				<li> <a href="">Juegos</a> </li>
				<li><a href="">Perifericos</a> </li>
				<li><a href="">Ofertas</a> </li>
			</ul>

			<input type="search" className="searchBar" />

			<CartWidget />
		</nav>
	);
};

export default Navbar;
