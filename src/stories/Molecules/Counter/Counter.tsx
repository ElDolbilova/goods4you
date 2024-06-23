import { SIZES } from "../../constants/ui";
import { useCount } from "../../hooks/useCount";
import { Button } from "../../Atoms/Button/Button";
import styles from "./styles.module.css";

export const Counter = ({ initialValue = 1 }) => {
	const { count, increment, decrement } = useCount(initialValue);

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
			>
				+
			</Button>
		</div>
	);
};
