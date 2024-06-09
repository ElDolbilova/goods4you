import { SIZES } from "../../constants/ui";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";

export const Product = () => {
	return (
		<main className={styles.root}>
			<h1>Product 5</h1>
			<section>
				<div className={styles.photoblock}>
					<div>
						<img
							src='/item5.png'
							alt='Puma Force 1 Shadow'
						/>
					</div>
					<div className={styles.previwlist}>
						<img
							src='/item5-small.png'
							alt=''
						/>
						<img
							src='/item5-small.png'
							alt=''
						/>
						<img
							src='/item5-small.png'
							alt=''
						/>
						<img
							src='/item5-small.png'
							alt=''
						/>
						<img
							src='/item5-small.png'
							alt=''
						/>
						<img
							src='/item5-small.png'
							alt=''
						/>
					</div>
				</div>
				<div className={styles.descriptionblock}>
					<div className={styles.head_info}>
						<h2>Puma Force 1 Shadow</h2>
						<p>
							<span>SKU ID</span> 0005
						</p>
					</div>
					<div className={styles.info}>
						<p>
							<span>Rating</span> <Rating rating={3} />
						</p>
						<p>
							<span>Base price</span>500$
						</p>
						<p>
							<span>Discount percentage</span>10%
						</p>
						<p>
							<span>Discount price</span>450$
						</p>
						<p>
							<span>Stock</span>13
						</p>
						<p>
							<span>Brand</span>Puma
						</p>
						<p>
							<span>Category</span>Smartphones
						</p>
						<p>
							<span>Description</span>An apple mobile which is nothing like
							apple
						</p>
					</div>
					<Button
						onClick={() => alert("Add to cart")}
						size={SIZES.m}
					>
						Add to cart
					</Button>
				</div>
			</section>
		</main>
	);
};
