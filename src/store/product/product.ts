import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
	tagTypes: [],
	endpoints: (builder) => ({
		getProductById: builder.query({
			query: (productId: number) => `/${productId}`,
		}),
		getAllProducts: builder.query({
			query: ({ limit, title }) => `/search?limit=${limit}&skip=0&q=${title}`,
		}),
		searchProductsByTitle: builder.query({
			query: (title) => `/search?q=${title}`,
		}),
	}),
});

// Export hooks for usage in functional components
export const {
	useGetAllProductsQuery,
	useGetProductByIdQuery,
	useSearchProductsByTitleQuery,
} = productApi;
