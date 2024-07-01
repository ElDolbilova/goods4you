import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useGetUserDetailsQuery } from "./store/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkToken, setCredentials } from "./store/auth/authSlice";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/login'
						element={<LoginPage />}
					/>
					<Route
						path='products?/:productId'
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
