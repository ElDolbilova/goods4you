import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { SIZES } from "../../constants/ui";
import styles from "./styles.module.css";
import { Counter } from "../Counter/Counter";
import { addToCart, selectCartProductIds } from "../../store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItemType } from "../../types/types";

interface ProductItemType {
	productid: string;
	title: string;
	image: string;
	price: number;
	stock: number;
}

export const ProductItem = ({
	productid,
	title,
	image,
	price,
	stock,
}: ProductItemType) => {
	const productLink = "products/" + productid;
	const pr_Ids = useSelector((state) => selectCartProductIds(state));
	const pr_count = pr_Ids?.find(({ id }) => id == productid);

	const dispatch = useDispatch();
	const cartProduct = {
		id: parseInt(productid),
		title: title,
		price: price,
		quantity: 1,
		thumbnail: image,
	};

	const add = () => dispatch(addToCart(cartProduct));

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
					<Counter
						initialValue={pr_count.quantity}
						productId={productid}
						maxCount={stock}
					/>
				) : (
					<Button
						onClick={add}
						size={SIZES.s}
					>
						<i className={styles.cart}></i>
					</Button>
				)}
			</div>
		</article>
	);
};
