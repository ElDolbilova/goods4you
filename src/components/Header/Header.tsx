import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
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
							<span className={styles.badge}>1</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
