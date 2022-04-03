import React from 'react';
import '@styles/RecoveryPassword.scss';
import logo from '@logos/logo_runa_sale.png';
import email from '@icons/email.svg';


const RecoveryPassword=()=>{
    return(
        <article className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="title">Correo Enviado</h1>
                <p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña.</p>
                <div className="email-image">
                    <img src={email} alt="email"/>
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
