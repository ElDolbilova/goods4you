import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./styles.module.css";

export const NotFoundPage = () => {
	return (
		<>
			<Header />
			<main className={styles.root}>
				<h1>Страница не найдена...&#129402;</h1>
				<article>
					<p>Но здесь &#128071; найдется всё :)</p>
					<Link to='..'>Goods4you</Link>
				</article>
			</main>
			<Footer />
		</>
	);
};
