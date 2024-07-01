import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectCartTotal } from "../../store/cart/cartSlice";

export const Badge = () => {
	const cartsTotal = useSelector((state) => selectCartTotal(state));

	return (
		<>
			<span className={styles.badge}>{cartsTotal}</span>
		</>
	);
};
