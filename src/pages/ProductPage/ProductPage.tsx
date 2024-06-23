import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Product } from "../../components/Product/Product";
import { useGetProductByIdQuery } from "../../store/product/product";

export const ProductPage = () => {
	const { productId } = useParams();
	const { data, error, isLoading } = useGetProductByIdQuery(
		parseInt(productId)
	);

	return (
		<>
			<Header />
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<Product product={data} />
				</>
			) : null}
			<Footer />
		</>
	);
};
