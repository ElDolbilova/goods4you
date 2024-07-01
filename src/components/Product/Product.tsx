import { redirect, useParams } from "react-router-dom";
import { SIZES } from "../../constants/ui";
import { useGetProductByIdQuery } from "../../store/product/product";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";

import { ProductImagesBlock } from "../ProductImagesBlock/ProductImagesBlock";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartProductIds } from "../../store/cart/cartSlice";

import { Counter } from "../Counter/Counter";

export const Product = ({ product }) => {
	const pr_Ids = useSelector((state) => selectCartProductIds(state));
	const pr_count = pr_Ids?.find(({ id }) => id == product.id);

	const dispatch = useDispatch();
	const cartProduct = {
		id: product.id,
		title: product.title,
		price: product.price,
		quantity: 1,
		thumbnail: product.thumbnail,
	};

	const add = () => dispatch(addToCart(cartProduct));

	return (
		<main className={styles.root}>
			<h1>Product 5</h1>
			<section>
				<ProductImagesBlock
					imagelist={product.images}
					title={product.title}
				/>
				<div className={styles.descriptionblock}>
					<div className={styles.head_info}>
						<h2>{product.title}</h2>
						<p>
							<span>SKU ID</span> {product.sku}
						</p>
					</div>
					<div className={styles.info}>
						<p>
							<span>Rating</span> <Rating rating={product.rating} />
						</p>
						<p>
							<span>Base price</span>
							{product.price}$
						</p>
						<p>
							<span>Discount percentage</span>
							{product.discountPercentage}%
						</p>
						<p>
							<span>Discount price</span>450$
						</p>
						<p>
							<span>Stock</span>
							{product.stock}
						</p>
						<p>
							<span>Brand</span>
							{product.brand}
						</p>
						<p>
							<span>Category</span>
							{product.category}
						</p>
						<p>
							<span>Description</span>
							{product.description}
						</p>
					</div>
					{pr_count ? (
						<Counter
							initialValue={pr_count.quantity}
							productId={product.id}
							maxCount={product.stock}
						/>
					) : (
						<Button
							onClick={add}
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
