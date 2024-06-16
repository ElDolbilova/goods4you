import { useState } from "react";
import styles from "./styles.module.css";
import { PreviewImage } from "../PreviewImage/PreviewImage";

interface TImgList {
	imagelist: string[];
	title: string | "";
}

export const ProductImagesBlock = ({ imagelist, title }: TImgList) => {
	const [activeImg, setActiveImg] = useState<number>(0);

	return (
		<div className={styles.photoblock}>
			<div>
				<img
					src={imagelist[activeImg]}
					alt={title}
				/>
			</div>
			<div className={styles.previwlist}>
				{imagelist.map((image: string, index: number) => (
					<PreviewImage
						key={index}
						srcurl={image}
						alt={title}
						className={index == activeImg ? styles.active : ""}
						onClick={() => setActiveImg(index)}
					/>
				))}
			</div>
		</div>
	);
};
