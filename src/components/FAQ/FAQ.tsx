import { FAQItem } from "../FAQItem/FAQItem";
import { faqlist } from "../../constants/mockdata.ts";
import styles from "./styles.module.css";
import classnames from "classnames";

interface FAQItemType {
	id: string;
	question: string;
	answer: string;
}

export const FAQ = () => {
	return (
		<section
			className={classnames(styles.root, styles.faqsection)}
			id='faq'
		>
			<h2>FAQ</h2>
			{faqlist.map((item: FAQItemType) => (
				<FAQItem
					key={item.id}
					id={item.id}
					question={item.question}
					answer={item.answer}
				/>
			))}
		</section>
	);
};
