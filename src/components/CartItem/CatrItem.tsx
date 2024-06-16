import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import styles from "./styles.module.css";

interface CartItemType {
	//productId: string;
	productTitle: string;
	productImage: string;
	count: number;
}

export const CartItem = ({
	productTitle,
	productImage,
	count,
}: CartItemType) => {
	return (
		<div className={styles.root}>
			<div className={styles.product}>
				<img
					src={productImage}
					alt={productTitle}
				/>
				<div className={styles.product_info}>
					<Link to='../product/1'>{productTitle}</Link>
					<p>100 $</p>
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
