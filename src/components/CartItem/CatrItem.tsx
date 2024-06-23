import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import styles from "./styles.module.css";
import { CartItemType } from "../../types/types";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/cart/cartSlice";

export const CartItem = ({
	productId,
	productImage,
	productTitle,
	productPrice,
	count,
}: CartItemType) => {
	const productUrl = "../products/" + productId;
	const dispatch = useDispatch();
	const delProduct = () => dispatch(deleteProduct(productId));

	return (
		<div className={styles.root}>
			<div className={styles.product}>
				<img
					src={productImage}
					alt={productTitle}
				/>
				<div className={styles.product_info}>
					<Link to={productUrl}>{productTitle}</Link>
					<p>{productPrice} $</p>
				</div>
			</div>
			<div className={styles.btns}>
				<Counter
					initialValue={count}
					productId={productId}
				/>
				<Button
					onClick={delProduct}
					className={styles.btn_delete}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};
