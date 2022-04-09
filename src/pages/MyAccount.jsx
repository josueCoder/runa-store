import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="my-account__title">Mi Cuenta</h1>
				<form action="/" className="my-account__form">
					<div>
						<label for="name" className="my-account__form-label">Nombre</label>
						<p className="value">Mary  Escalante</p>
						<label for="email" className="my-account__form-label">Correo</label>
						<p className="value">escalante23@gmail.com</p>
						<label for="password" className="my-account__form-label">Contraseña</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Editar" className="my-account__form-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;