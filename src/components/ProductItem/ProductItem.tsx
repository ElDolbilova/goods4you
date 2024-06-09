import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { SIZES } from "../../constants/ui";
import styles from "./styles.module.css";
import { Counter } from "../Counter/Counter";

interface ProductItemType {
	productid: string;
	title: string;
	image: string;
	price: number;
}

export const ProductItem = ({
	productid,
	title,
	image,
	price,
}: ProductItemType) => {
	return (
		<article
			key={productid}
			className={styles.root}
		>
			<Link to={"product/1"}>
				<img
					src={image}
					alt={title}
				/>
			</Link>
			<div className={styles.product_info}>
				<div className={styles.description}>
					<h3>
						<Link to={"product/1"}>{title}</Link>
					</h3>
					<p>{price} $</p>
				</div>
				{!productid.localeCompare("9") ? (
					<Counter initialValue={1} />
				) : (
					<Button
						onClick={() => alert("Cart click")}
						size={SIZES.s}
					>
						<i className={styles.cart}></i>
					</Button>
				)}
			</div>
		</article>
	);
};
