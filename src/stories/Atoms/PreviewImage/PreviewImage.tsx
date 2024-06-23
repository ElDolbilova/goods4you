interface Timg {
	srcurl: string;
	alt: string;
	className?: string;
	onClick: React.MouseEventHandler<HTMLImageElement>;
}
export const PreviewImage = ({
	srcurl,
	alt = "",
	className = "",
	onClick,
}: Timg) => {
	return (
		<img
			src={srcurl}
			alt={alt}
			className={className}
			onClick={onClick}
			loading='lazy'
		/>
	);
};
