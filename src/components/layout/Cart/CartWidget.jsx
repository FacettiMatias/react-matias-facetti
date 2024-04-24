import "./CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Badge } from "@mui/material";

const CartWidget = () => {
	return (
		<div className="cart">
			<Badge badgeContent={0} showZero className="badge">
				<ShoppingCartOutlinedIcon className="cartSvg" />
			</Badge>
		</div>
	);
};

export default CartWidget;
