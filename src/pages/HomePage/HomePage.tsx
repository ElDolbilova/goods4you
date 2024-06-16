/* import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg"; */

import { Catalog } from "../../components/Catalog/Catalog";
import { Footer } from "../../components/Footer/Footer";
import { FAQ } from "../../components/FAQ/FAQ";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const HomePage = () => {
	return (
		<>
			<header className={styles.root}>
				<div className={styles.headline}>
					<h1>Goods4you</h1>
					<nav role='navigation'>
						<ul className={styles.navul}>
							<li>
								<a href='#catalog'>Catalog</a>
							</li>
							<li>
								<a href='#faq'>FAQ</a>
							</li>
							<li>
								<Link to='cart'>
									Cart<i className={styles.cart}></i>
									<span className={styles.badge}>1</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<p>Any products from famous brands with worldwide delivery</p>
				<p>
					We sell smartphones, laptops, clothes, shoes and many other products
					at low prices
				</p>
				<a
					href='#catalog'
					className={styles.buttonview}
				>
					Go to shopping
				</a>
				<div className={styles.containerbackground}>Goods4you</div>
			</header>
			<main className={styles.mainroot}>
				<Catalog />
				<FAQ />
			</main>
			<Footer />
		</>
	);
};
