import React from 'react';
import '../styles/RecoveryPassword.scss';


const RecoveryPassword=()=>{
    return(
        <article className="login">
            <div className="form-container">
                <img src="" alt="logo" className="logo"/>
                <h1 className="title">Correo Enviado</h1>
                <p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña.</p>
                <div className="email-image">
                    <img src="./icons/email.svg" alt="email"/>
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>¿No recibiste el correo electrónico?</span>
                    <a href="/">Reenviar</a>
                </p>
            </div>
        </article>

    );
}
export default RecoveryPassword;
