import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./styles.module.css";

export const NotFoundPage = () => {
	return (
		<>
			<Header />
			<main className={styles.root}>
				<h1>Oops, something happened, this page id missing!</h1>
				<article>
					<p>But you can find all here &#128071; :)</p>
					<Link to='..'>Goods4you</Link>
				</article>
			</main>
			<Footer />
		</>
	);
};
