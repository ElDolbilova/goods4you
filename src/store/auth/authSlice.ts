import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
	? localStorage.getItem("userToken")
	: null;

const initialState = {
	loading: false,
	userInfo: null,
	userToken,
	error: null,
	success: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem("userToken");
			state.userInfo = null;
			state.userToken = null;
			state.error = null;
		},
		setCredentials: (state, { payload }) => {
			state.userInfo = payload;
		},
		checkToken: (state) => {
			if (!userToken) {
				state.userInfo = null;
				state.userToken = null;
				state.error = null;
			}
		},
	},
	extraReducers: (builder) => {
		// login user
		builder
			.addCase(userLogin.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(userLogin.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.userInfo = payload;
				state.userToken = payload.userToken;
			})
			.addCase(userLogin.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});
export default authSlice;
export const { logout, setCredentials, checkToken } = authSlice.actions;
