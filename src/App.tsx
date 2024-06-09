import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='product?/:priductId'
					element={<ProductPage />}
				/>
				<Route
					path='cart'
					element={<CartPage />}
				/>
				<Route
					path='*'
					element={<NotFoundPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
