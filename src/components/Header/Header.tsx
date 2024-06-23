import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Badge } from "../Badge/Badge";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";
import { useSelector } from "react-redux";

export const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const { data, error, isLoading } = useGetCartByUserIdQuery(userInfo?.id);

	if (isLoading || error) {
		return <></>;
	}

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
							{data ? data.total > 0 ? <Badge /> : null : null}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
