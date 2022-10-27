import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
	const [didMount, setDidMount] = useState(false);
	//const [formError, setFormError] = useState();

	useEffect(() => {
		const goBack = (event) => {
			if(didMount && (event.key === 'Escape' || !event.target.closest('#authentication_wrapper')))
				navigate(-1);
		}
		
		document.addEventListener("keydown", goBack);
		document.addEventListener("click", goBack);
		setDidMount(true);

		return () => {
			document.removeEventListener("keydown", goBack);
			document.removeEventListener("click", goBack);
		}
	}, [navigate, didMount]);

	const doLogin = async (event) => {
		event.preventDefault();

		try {
			const userData = {
				username: 'cosme_fulanito',
				email: 'cosme.fulanito@gmail.com',
				profilePicture: '/img/default_profile_picture.png',
				accessToken: 'blabla',
				refreshToken: 'blabla'
			};
				
			navigate('/user/profile', {
				replace: true,
				state: userData
			});
		}
		catch(error) {
			return {
				title: "Ocurrió un error inesperado. Inténtelo más tarde.",
				message: error
			}
		}
	}

	return (
		<>
			<div className="overlay"></div>
			<div id="authentication_wrapper" className="card">
				<div className="card-body">
					<form id="login_form" name="loginForm" onSubmit={doLogin}>
						<legend>Accede a tu cuenta</legend>
						{/*formError && <p className="text-danger" style={{'whiteSpace': 'pre-wrap'}}>{`${formError.title}\nCausa: ${formError.message}`}</p>*/}
						<div className="py-2">
							<input type="text" className="form-control" name="email" placeholder="Usuario o correo electrónico" autoFocus/>
						</div>
						<div className="pt-2 pb-4">
							<input type="text" className="form-control" name="password" placeholder="Contraseña"/>
						</div>
						<div className="d-grid gap-2 pb-2">
							<button type="submit" className="btn btn-primary">Ingresar</button>
						</div>
						<div className="py-4">
							<Link to="/auth/forgottenpassword">¿Olvidaste tu contraseña?</Link>
						</div>
						<div className="mt-2">
							<span>¿No tienes cuenta? <Link to="/auth/signup" replace>Registrarse</Link></span>
						</div>
					</form>
				</div>
			</div>
		</>
    );
}

export default Login;