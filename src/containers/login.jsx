import React from 'react';
import '../style/Login.scss';
const Login=()=>{

    return(
        <article className="login">
            <div className="form-container">
            <img src="" alt="logo" className="logo artesaner shop"/> 
            <h1 className="title">Create una nueva contraseña</h1>
            <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label htmlFor="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="Confirmar" className="primary-button login-button"/>
            </form>
            </div>
       </article>

    );

}

export default Login;

