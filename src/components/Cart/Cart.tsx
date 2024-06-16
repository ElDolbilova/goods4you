import { CartList } from "../CartList/CartList";
import styles from "./styles.module.css";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";

export const Cart = () => {
	const userId = 94;
	const { data, error, isLoading } = useGetCartByUserIdQuery(userId);

	return (
		<main className={styles.root}>
			<h1>My cart</h1>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<section>
						<CartList products={data.carts[0].products} />
						<div className={styles.cart_total}>
							<p>
								<span>Total count:</span>
								{data.carts[0].totalProducts}
							</p>
							<p>
								<span>Total price:</span>
								{data.carts[0].total}
							</p>
							<p>
								<span>Total price with discount:</span>
								{data.carts[0].discountedTotal}
							</p>
						</div>
					</section>
				</>
			) : null}
		</main>
	);
};
