import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="create-account__title">Mi cuenta</h1>
				<form action="/" className="create-account__form">
					<div className='create-account__form-container'>
						<label for="name" className="create-account__form-label">Celular</label>
						<input type="text" id="name"  className="create-account__form-input" />
						<label for="email" className="create-account__form-label">Correo</label>
						<input type="text" id="email" placeholder="runaestore@gmail.com" className="create-account__form-input" />
						<label for="password" className="create-account__form-label">Contraseña</label>
						<input type="password" id="password" placeholder="*********" className="create-account__form-input" />
					</div>
					<input type="submit" value="Create" className="create-account__form-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;