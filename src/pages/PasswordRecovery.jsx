import React from 'react';
import '@styles/RecoveryPassword.scss';

import logo from '@logos/logo_runa_sale.png';

const PasswordRecovery = () => {
	return (
		<div className="RecoveryPassword">
			<div className="RecoveryPassword-container">
				<img src={logo} alt="logo" className="RecoveryPassword-logo" />
				<h1 className="title">Recuperar Contraseña</h1>
				<p className="subtitle">Ingrese su correo electronico de recuperacion</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;