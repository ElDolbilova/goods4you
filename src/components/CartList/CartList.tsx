//import { cartproducts } from "../../constants/mockdata";
import { CartItem } from "../CartItem/CatrItem";
import styles from "./styles.module.css";

export const CartList = ({ products }) => {
	return (
		<div className={styles.root}>
			{products.map((product) => (
				<CartItem
					key={product.id}
					productId={product.id}
					productTitle={product.title}
					productImage={product.thumbnail}
					productPrice={product.price}
					count={product.quantity}
				/>
			))}
		</div>
	);
};
