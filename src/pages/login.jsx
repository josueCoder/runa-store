// import React,{useRef} from 'react';
// import '@styles/Login.scss';
// const Login=()=>{
//     const form=useRef(null);
//     const handleSubmit=()=>{
//         const formData=new FormData(form.current);
//         const data={
//             username: formData.get('email'),
//             password: formData.get('password')
//         }
//         console.log(data);
//     }

//     return(
//         <div className="Login" ref={form}>
//             <div className="Login-container">
//                 <img src="./logos/logo_runa_sale.png" alt="logo" className="logo" />
//                 <form action="/" className="form">
//                     <label htmlFor="email" className="label">Direccion de Correo</label>
//                     <input type="text" nmae="email" placeholder="runastore@ejemplo.com" className="input input-email" />
//                     <label htmlFor="password" className="label">Contraseña</label>
//                     <input type="password" name="password" placeholder="*********" className="input input-password" />
//                     <input type="submit" value="Log in" className="primary-button login-button"/>
//                     <a href="/">Olvide Mi Contraseña</a>
//                 </form>
//                 <button className="secondary-button signup-button" onClick={handleSubmit}>
//                     Registrarte
//                 </button>
//             </div>
//         </div>

//     );

// }

// export default Login;
import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_runa_sale.png'

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Correo Electronico</label>
					<input type="text" name="email" placeholder="runastore@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Ingresar
					</button>
					<a href="/">Olvide mi contraseña</a>
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

