import { ProductItem } from "../ProductItem/ProductItem";
import { products } from "../../constants/mockdata.ts";
import styles from "./styles.module.css";
import { Button } from "../Button/Button.tsx";

interface ProductItemType {
	productid: string;
	title: string;
	image: string;
	price: number;
}

export const ProductList = () => {
	return (
		<>
			<div className={styles.root}>
				{products.map((product: ProductItemType) => (
					<ProductItem
						key={product.productid}
						productid={product.productid}
						title={product.title}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
			<Button onClick={() => alert("Show more")}>Show more</Button>
		</>
	);
};
