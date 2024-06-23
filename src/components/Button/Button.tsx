import styles from "./styles.module.css";
import clasnames from "classnames";
import { SIZES } from "../../constants/ui";

interface TB {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	className?: string | "";
	size?: string;
	disabled?: boolean;
}

export const Button = ({
	children,
	className = "",
	onClick,
	size = SIZES.m,
	disabled = false,
}: TB) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={clasnames(styles.root, className, styles[size])}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
