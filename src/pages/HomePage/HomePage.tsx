import { Catalog } from "../../components/Catalog/Catalog";
import { Footer } from "../../components/Footer/Footer";
import { FAQ } from "../../components/FAQ/FAQ";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Badge } from "../../components/Badge/Badge";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const HomePage = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		}
	}, [navigate, userInfo]);
	const { data, error, isLoading } = useGetCartByUserIdQuery(userInfo?.id);

	if (isLoading || error) {
		return <></>;
	}
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
									{data ? data.total > 0 ? <Badge /> : null : null}
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
