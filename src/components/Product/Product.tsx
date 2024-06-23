import { redirect, useParams } from "react-router-dom";
import { SIZES } from "../../constants/ui";
import { useGetProductByIdQuery } from "../../store/product/product";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";

import { ProductImagesBlock } from "../ProductImagesBlock/ProductImagesBlock";
import { useSelector } from "react-redux";
import cartSlice, { selectors } from "../../store/cart/cartSlice";
import { RootState } from "../../store";
import { Counter } from "../Counter/Counter";

export const Product = () => {
	const { productId } = useParams();

	const { data, error, isLoading } = useGetProductByIdQuery(productId);
	const selprIds = cartSlice.getSelectors().selectCart;
	const list = useSelector((state) => selprIds(state));
	const pr_count = list?.cartslice?.products.find(
		(product) => product.id == productId
	);

	if (error) {
		return redirect("/404");
	}
	if (isLoading) {
		return (
			<main className={styles.root}>
				<h1>Product 5</h1>
			</main>
		);
	}

	return (
		<main className={styles.root}>
			<h1>Product 5</h1>
			<section>
				<ProductImagesBlock
					imagelist={data.images}
					title={data.title}
				/>
				<div className={styles.descriptionblock}>
					<div className={styles.head_info}>
						<h2>{data.title}</h2>
						<p>
							<span>SKU ID</span> {data.sku}
						</p>
					</div>
					<div className={styles.info}>
						<p>
							<span>Rating</span> <Rating rating={data.rating} />
						</p>
						<p>
							<span>Base price</span>
							{data.price}$
						</p>
						<p>
							<span>Discount percentage</span>
							{data.discountPercentage}%
						</p>
						<p>
							<span>Discount price</span>450$
						</p>
						<p>
							<span>Stock</span>
							{data.stock}
						</p>
						<p>
							<span>Brand</span>
							{data.brand}
						</p>
						<p>
							<span>Category</span>
							{data.category}
						</p>
						<p>
							<span>Description</span>
							{data.description}
						</p>
					</div>
					{pr_count ? (
						<Counter initialValue={pr_count.quantity} />
					) : (
						<Button
							onClick={() => alert("Add to cart")}
							size={SIZES.m}
						>
							Add to cart
						</Button>
					)}
				</div>
			</section>
		</main>
	);
};
