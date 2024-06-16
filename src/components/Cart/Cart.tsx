import { CartList } from "../CartList/CartList";
import styles from "./styles.module.css";

export const Cart = () => {
	return (
		<main className={styles.root}>
			<h1>My cart</h1>
			<section>
				<CartList />
				<div className={styles.cart_total}>
					<p>
						<span>Total count:</span>3
					</p>
					<p>
						<span>Total price:</span>700$
					</p>
					<p>
						<span>Total price with discount:</span>590$
					</p>
				</div>
			</section>
		</main>
	);
};
