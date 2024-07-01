//import { cartproducts } from "../../constants/mockdata";
import { CartItemType } from "../../types/types";
import { CartItem } from "../CartItem/CatrItem";
import styles from "./styles.module.css";

export const CartList = ({ products }: Array<CartItemType>) => {
	return (
		<div className={styles.root}>
			{products.map((product: CartItemType) => (
				<CartItem
					key={product.productId}
					productId={product.productId}
					productTitle={product.productTitle}
					productImage={product.productImage}
					productPrice={product.productPrice}
					count={product.count}
				/>
			))}
		</div>
	);
};
