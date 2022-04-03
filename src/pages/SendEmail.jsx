import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_runa_sale.png';
import email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Correo Enviado</h1>
				<p className="subtitle">Consulte su Bandeja de entrada para obtener las instruciones sobre como restablecer la contraseña</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>¿No recibiste el correo electronico?</span>
					<a href="/">reenviar</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;