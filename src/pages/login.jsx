
import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_runa_sale.png'

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    }


	return (
		<div className="login">
			<div className="login-container">
				<img src={logo} alt="logo" className="login-logo"/>
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Correo Electronico</label>
					<input type="text" name="email" placeholder="runastore@gmail.com" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button"
                    >
						Iniciar Sesion
					</button>
					<a href="/send-email">Olvide mi contraseña</a>
				</form>
				<button
					className="secondary-button signup-button"
				>
					Registrarse
				</button>
			</div>
		</div >
	);
}

export default Login;

