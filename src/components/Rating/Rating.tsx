import { MAX_RATING } from "./constants";
import styles from "./styles.module.css";
import classnames from "classnames";

interface TRating {
	rating: number;
}

export const Rating = ({ rating }: TRating) => {
	return (
		<div className={styles.root}>
			{new Array(MAX_RATING).fill(null).map((_, index) => (
				<img
					src='/Star 5.svg'
					key={index}
					className={classnames({
						[styles.grey]: rating <= index,
					})}
					loading='lazy'
				/>
			))}
		</div>
	);
};
