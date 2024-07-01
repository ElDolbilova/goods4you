import { ProductItem } from "../ProductItem/ProductItem";
//import { products } from "../../constants/mockdata.ts";
import styles from "./styles.module.css";
import { Button } from "../Button/Button.tsx";
import { useCallback, useState } from "react";
import { useGetAllProductsQuery } from "../../store/product/product.ts";
import { debounce } from "lodash";


interface ProductItemType {
	productid: string;
	title: string;
	image: string;
	price: number;
	stock: number;
}

export const ProductList = () => {
	const [pageNum, setPageNum] = useState<number>(1);
	const [searchString, setSearchString] = useState("");

	const limit = 9 * pageNum;

	const {
		data = [],
		error,
		isLoading,
	} = useGetAllProductsQuery({ limit: limit, title: searchString || "" });

	const nextPage = useCallback(() => {
		setPageNum((n: number) => n + 1);
	}, []);

	const handleChange = debounce(({ target }) => {
		setSearchString(target.value);
	}, 500);
	/* const handleClick = () => {
		setSearchString(target.value);
	}; */

	if (isLoading) {
		return <>Loading...</>;
	}
	if (error) {
		return <>Oh no, there was an error</>;
	}

	return (
		<>
			<div className={styles.searchroot}>
				<input
					type='text'
					name='searchtt'
					placeholder='Search by title'
					onChange={handleChange}
				/>
				<Button onClick={() => alert("SearchButton click!")}>Search</Button>
			</div>

			<div className={styles.root}>
				{data.products.map((product: ProductItemType) => (
					<ProductItem
						key={product.id}
						productid={product.id}
						title={product.title}
						price={product.price}
						image={product.images[0]}
						stock={product.stock}
					/>
				))}
			</div>

			<Button onClick={nextPage}>Show more</Button>
		</>
	);
};
