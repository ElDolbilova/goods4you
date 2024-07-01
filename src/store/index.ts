import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { cartApi } from "./cart/cart";
import { productApi } from "./product/product";
import { cartSlice } from "./cart/cartSlice";
import { authApi } from "./auth/authService";
import authSlice from "./auth/authSlice";
//import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
	[cartApi.reducerPath]: cartApi.reducer,
	[productApi.reducerPath]: productApi.reducer,
	cartslice: cartSlice.reducer,
	auth: authSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(cartApi.middleware)
				.concat(productApi.middleware)
				.concat(authApi.middleware),

		preloadedState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
