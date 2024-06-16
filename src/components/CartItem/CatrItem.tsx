import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import styles from "./styles.module.css";
import { CartItemType } from "../../types/types";

export const CartItem = ({
	productId,
	productImage,
	productTitle,
	productPrice,
	count,
}: CartItemType) => {
	const productUrl = "../products/" + productId;
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
				<Counter initialValue={count} />
				<Button
					onClick={() => alert("delete button click!")}
					className={styles.btn_delete}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};
