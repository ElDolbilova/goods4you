import { CartList } from "../CartList/CartList";
import styles from "./styles.module.css";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";
import { useSelector } from "react-redux";
import {
	selectCartProducts,
	selectCartTotal,
	selectCartTotalDiscount,
	selectCartTotalPrice,
} from "../../store/cart/cartSlice";

export const Cart = () => {
	/* const userId = 94;
	const { data, error, isLoading } = useGetCartByUserIdQuery(userId); */

	const products = useSelector((state) => selectCartProducts(state));
	const totalProducts = useSelector((state) => selectCartTotal(state));
	const totalPrice = useSelector((state) => selectCartTotalPrice(state));
	const totalDiscount = useSelector((state) => selectCartTotalDiscount(state));

	console.log(products);

	return (
		<main className={styles.root}>
			<h1>My cart</h1>

			<section>
				<CartList products={products} />
				<div className={styles.cart_total}>
					<p>
						<span>Total count:</span>
						{totalProducts}
					</p>
					<p>
						<span>Total price:</span>
						{totalPrice}
					</p>
					<p>
						<span>Total price with discount:</span>
						{totalDiscount}
					</p>
				</div>
			</section>
		</main>
	);
};
