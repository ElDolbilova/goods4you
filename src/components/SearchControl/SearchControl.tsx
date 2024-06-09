import { Button } from "../Button/Button";
import styles from "./styles.module.css";

export const SearchControl = () => {
	return (
		<div className={styles.root}>
			<input
				type='text'
				name='search'
				placeholder='Search by title'
			/>
			<Button onClick={() => alert("SearchButton click!")}>Search</Button>
		</div>
	);
};
