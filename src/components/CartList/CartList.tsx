import { cartproducts } from "../../constants/mockdata";
import { CartItem } from "../CartItem/CatrItem";
import styles from "./styles.module.css";

export const CartList = () => {
	return (
		<div className={styles.root}>
			{cartproducts.map((cartitem) => (
				<CartItem
					key={cartitem.productId}
					//productId={cartitem.productId}
					productTitle={cartitem.productTitle}
					productImage={cartitem.productImage}
					count={cartitem.count}
				/>
			))}
		</div>
	);
};
