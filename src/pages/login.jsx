import React from 'react';
import '../styles/Login.scss';
const Login=()=>{

    return(
        <div className="Login">
            <div className="Login-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Direccion de Correo</label>
                    <input type="text" id="email" placeholder="artesaner@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Log in" className="primary-button login-button" />
                    <a href="/">Olvide Mi Contraseña</a>
                </form>
                <button className="secondary-button signup-button">Registrarte</button>
            </div>
        </div>

    );

}

export default Login;

