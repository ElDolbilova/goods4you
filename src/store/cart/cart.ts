/* import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectCartModule } from "./selectors";

interface CartState{
	carts:Array<T>,
	total: number,
	skip:number,
	limit:number
}

const initialState = {
	carts: [],
	total: 0,
	skip: 0,
	limit: 0,
};

export const cartSlice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {},
	selectors: {
		selectCartSelf: createSelector((sliceState: CartState) => sliceState),
		selectCartIsNotEmpty: createSelector(
			selectCartSelf,
			(sliceState: CartState) => sliceState.total > 0
		),
	},
}); */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
	reducerPath: "cartApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/carts" }),
	tagTypes: [],
	endpoints: (builder) => ({
		getCartByUserId: builder.query({
			query: (userId: number) => `user/${userId}`,
		}),
	}),
});

// Export hooks for usage in functional components
export const { useGetCartByUserIdQuery } = cartApi;
