import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dummyjson.com/auth/",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
				return headers;
			}
		},
	}),
	endpoints: (builder) => ({
		getUserDetails: builder.query({
			query: () => ({
				url: "me",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetUserDetailsQuery } = authApi;
