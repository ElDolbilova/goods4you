import { useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useGetCartByUserIdQuery } from "../../store/cart/cart";

export const CartPage = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const userId = !userInfo ? 0 : userInfo.id;
	const { data, error, isLoading } = useGetCartByUserIdQuery(userId);
	return (
		<>
			<Header />
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<Cart />
				</>
			) : null}
			<Footer />
		</>
	);
};
