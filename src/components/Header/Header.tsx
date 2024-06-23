import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";
import { Badge } from "../Badge/Badge";

export const Header = () => {
	const userId = 94;
	const { data, error, isLoading } = useGetCartByUserIdQuery(userId);

	return (
		<header className={styles.root}>
			<span>
				<Link to='..'>Goods4you</Link>{" "}
			</span>
			<nav role='navigation'>
				<ul className={styles.navul}>
					<li>
						<Link to='../..#catalog'>Catalog</Link>
					</li>
					<li>
						<Link
							to='../..#faq'
							preventScrollReset={false}
						>
							FAQ
						</Link>
					</li>
					<li>
						<Link to='../cart'>
							Cart<i className={styles.cart}></i>
							<Badge />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
