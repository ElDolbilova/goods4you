import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Footer = () => {
	return (
		<footer>
			<ul className={styles.fotnav}>
				<li>
					<Link to='../..'>Goods4you</Link>
				</li>
				<li>
					<Link to='../..#catalog'>Catalog</Link>
				</li>
				<li>
					<Link to='../..#faq'>FAQ</Link>
				</li>
			</ul>
		</footer>
	);
};
