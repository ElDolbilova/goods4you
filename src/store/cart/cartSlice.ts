import {
	isAnyOf,
	createSlice,
	createSelector,
	PayloadAction,
} from "@reduxjs/toolkit";
import { cartApi } from "./cart";
//import { products } from "../../constants/mockdata";
import { CartItemType } from "../../types/types";
import { productApi } from "../product/product";

const initialState = {
	cartslice: null,
};

export const cartSlice = createSlice({
	name: "cartslice",
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<number>) {
			const prId = action.payload;
			let prindex = state.cartslice?.products.findIndex(
				(pr) => pr.id == parseInt(prId)
			);
			if (prindex > -1) {
				state.cartslice.products[prindex].quantity =
					state.cartslice.products[prindex].quantity + 1;
			} else {
				console.log(productApi.endpoints.getAllProducts.select(total));
				state.cartslice?.products.push(action.payload);
			}
		},
		removeProduct(state, action: PayloadAction<number>) {
			const prId = action.payload;
			let prindex = state.cartslice?.products.findIndex(
				(pr) => pr.id == parseInt(prId)
			);

			if (prindex > -1) {
				state.cartslice.products[prindex].quantity =
					state.cartslice.products[prindex].quantity - 1;
				if (state.cartslice.products[prindex].quantity == 0) {
					state.cartslice.products.splice(prindex, 1);
					state.cartslice.totalProducts = state.cartslice.products.length;
				}
			}
		},
		deleteProduct(state, action: PayloadAction<number>) {
			const prId = action.payload;
			let prindex = state.cartslice?.products.findIndex(
				(pr) => pr.id == parseInt(prId)
			);

			if (prindex > -1) {
				state.cartslice.products.splice(prindex, 1);
				state.cartslice.totalProducts = state.cartslice.products.length;
			}
		},
		addToCart(state, action: PayloadAction) {
			state.cartslice.products.push(action.payload);
			state.cartslice.totalProducts = state.cartslice.products.length;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(cartApi.endpoints.getCartByUserId.matchFulfilled), //updated
			(state, action) => void (state.cartslice = action.payload.carts[0])
		);
	},
	selectors: {
		selectCart: (state) => state.cartslice,
		// selectCartProductIds: (state) => {
		// 	state.cartslice?.cartslice?.products?.map(({ id, quantity }) => ({
		// 		id,
		// 		quantity,
		// 	}));
		// },
	},
});

export default cartSlice;

export const { addProduct, removeProduct, addToCart, deleteProduct } =
	cartSlice.actions;

export const selectCartProductIds = createSelector(
	(state) => state.cartslice, // the first argument accesses relevant data from global state
	(cartslice) =>
		cartslice.cartslice.products?.map(
			({ id, quantity }: { id: number; quantity: number }) => ({ id, quantity })
		)
);
export const selectCartTotal = createSelector(
	(state) => state.cartslice, // the first argument accesses relevant data from global state
	(cartslice) => cartslice.cartslice.totalProducts
);
export const selectCartTotalPrice = createSelector(
	(state) => state.cartslice, // the first argument accesses relevant data from global state
	(cartslice) => cartslice.cartslice.total
);
export const selectCartTotalDiscount = createSelector(
	(state) => state.cartslice, // the first argument accesses relevant data from global state
	(cartslice) => cartslice.cartslice.discountedTotal
);
export const selectCartProducts = createSelector(
	(state) => state.cartslice, // the first argument accesses relevant data from global state
	(cartslice) =>
		cartslice.cartslice.products.map((product) => {
			const partialPr: CartItemType = {
				productId: product.id,
				productTitle: product.title,
				productImage: product.thumbnail,
				productPrice: product.price,
				count: product.quantity,
			};
			return partialPr;
		})
);
//export const selectors = cartsSlice.getSelectors();
// Later, dispatch the thunk as needed in the app
//dispatch(fetchCartByUserId(94))
