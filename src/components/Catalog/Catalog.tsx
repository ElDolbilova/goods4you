import { ProductList } from "../ProductsList/ProductList";
//import { SearchControl } from "../SearchControl/SearchControl";
import styles from "./styles.module.css";

export const Catalog = () => {
	return (
		<section
			id='catalog'
			className={styles.root}
		>
			<h2>Catalog</h2>

			<ProductList />
		</section>
	);
};
