import { SIZES } from "../../constants/ui";
import { Button } from "../Button/Button";
import styles from "./styles.module.css";
import classnames from "classnames";

interface FAQItemType {
	id: string;
	question: string;
	answer: string;
}
export const FAQItem = ({ id, question, answer }: FAQItemType) => {
	return (
		<div
			key={id}
			className={classnames(styles.ques_item, styles.collapsed)}
		>
			<Button
				onClick={(event) => {
					const ques = event.target.closest("div");
					ques.classList.toggle(styles.collapsed);
					ques.closest("div").classList.toggle(styles.expanded);
				}}
				className={styles.btn_q}
				size={SIZES.s}
			>
				+
			</Button>
			<h3>{question}</h3>
			<p>{answer}</p>
		</div>
	);
};
