import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { SIZES } from "../../constants/ui";
import styles from "./styles.module.css";
import { Counter } from "../Counter/Counter";
import cartSlice from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";

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
	const productLink = "products/" + productid;
	const selprIds = cartSlice.getSelectors().selectCart;
	const list = useSelector((state) => selprIds(state));
	const pr_count = list?.cartslice?.products.find(
		(product) => product.id == productid
	);

	return (
		<article
			key={productid}
			className={styles.root}
		>
			<Link to={productLink}>
				<img
					src={image}
					alt={title}
					loading='lazy'
				/>
			</Link>
			<div className={styles.product_info}>
				<div className={styles.description}>
					<h3>
						<Link to={productLink}>{title}</Link>
					</h3>
					<p>{price} $</p>
				</div>
				{pr_count ? (
					<Counter initialValue={pr_count.quantity} />
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
