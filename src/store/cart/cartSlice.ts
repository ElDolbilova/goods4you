import { isAnyOf, createSlice } from "@reduxjs/toolkit";
import { cartApi } from "./cart";
import { CartItemType } from "../../types/types";
import { RootState } from "@reduxjs/toolkit/query";

const initialState = {
	cartslice: null,
};

export const cartSlice = createSlice({
	name: "cartslice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(cartApi.endpoints.getCartByUserId.matchFulfilled), //updated
			(state, action) => void (state.cartslice = action.payload.carts[0])
		);
	},
	selectors: {
		selectCart: (state) => state.cartslice,
		selectCartProductIds: (state) => {
			state.cartslice?.products?.map((product) => {
				let item = {};
				item.id = product.id;
				item.count = product.quantity;
				return item;
			});
		},
	},
});

export default cartSlice;
//export const selectors = cartsSlice.getSelectors();
// Later, dispatch the thunk as needed in the app
//dispatch(fetchCartByUserId(94))
