import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../store/auth/authService";
import { checkToken, setCredentials } from "../../store/auth/authSlice";

export const ProtectedRoute = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	console.log(!userInfo);

	// automatically authenticate user if token is found
	const { data } = useGetUserDetailsQuery("userDetails", {
		pollingInterval: 900000, // 15mins
	});

	useEffect(() => {
		if (data) dispatch(setCredentials(data));
	}, [data, dispatch]);

	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		}
	}, [navigate, userInfo]);

	return <Outlet />;
};
