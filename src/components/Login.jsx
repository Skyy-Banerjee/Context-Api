import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);

	function handleSubmit(evt) {
		evt.preventDefault();
		setUser({ username, password });
	}

	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				placeholder="username.."
				value={username}
				onChange={(evt) => {
					setUsername(evt.target.value);
				}}
			/>
            {"  "}
			<input
				type="password"
				placeholder="password.."
				value={password}
				onChange={(evt) => {
					setPassword(evt.target.value);
				}}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
