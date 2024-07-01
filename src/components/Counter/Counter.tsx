import { useDispatch } from "react-redux";
import { SIZES } from "../../constants/ui";
import { Button } from "../Button/Button";
import styles from "./styles.module.css";
import { addProduct, removeProduct } from "../../store/cart/cartSlice";

export const Counter = ({
	initialValue = 1,
	productId,
	maxCount = 0,
}: {
	initialValue: number;
	productId: number;
	maxCount?: number;
}) => {
	//const { count, increment, decrement } = useCount(initialValue);
	const dispatch = useDispatch();
	const count = initialValue;

	const decrement = () => dispatch(removeProduct(productId));
	const increment = () => dispatch(addProduct(productId));

	return (
		<div className={styles.root}>
			<Button
				onClick={decrement}
				size={SIZES.s}
			>
				&minus;
			</Button>
			<span className={styles.num_box}>{count}</span>
			<Button
				onClick={increment}
				size={SIZES.s}
				disabled={maxCount == 0 ? false : count >= maxCount}
			>
				+
			</Button>
		</div>
	);
};
