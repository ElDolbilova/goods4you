import { useGetCartByUserIdQuery } from "../../store/cart/cart";
import styles from "./styles.module.css";

export const Badge = () => {
	const userId = 94;
	const { data, error, isLoading } = useGetCartByUserIdQuery(userId);
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return <></>;
	}
	return (
		<>
			{data ? (
				data.total > 0 ? (
					<span className={styles.badge}>{data.carts[0].totalProducts}</span>
				) : null
			) : null}
		</>
	);
};
