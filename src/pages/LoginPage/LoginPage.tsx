import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/auth/authActions";
import styles from "./styles.module.css";

export const LoginPage = () => {
	const { loading, userInfo, error } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	// redirect
	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [navigate, userInfo]);

	const submitForm = (data) => {
		dispatch(userLogin(data));
	};
	return (
		<div className={styles.root}>
			<header>
				<span>Goods4you</span>
			</header>
			<main>
				<h1>Login</h1>
				<form
					onSubmit={handleSubmit(submitForm)}
					className={styles.formlogin}
				>
					{error && <span>{error}</span>}
					<div className={styles.form_group}>
						<label htmlFor='username'>UserName</label>
						<input
							type='text'
							className={styles.form_input}
							{...register("username")}
							placeholder='Login'
							required
						/>
					</div>
					<div className={styles.form_group}>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							className={styles.form_input}
							{...register("password")}
							placeholder='Password'
							required
						/>
					</div>
					<button
						type='submit'
						className={styles.button}
						disabled={loading}
					>
						{loading ? "loading" : "Login"}
					</button>
				</form>
			</main>
		</div>
	);
};
