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

			/*var form = document.forms['login_form'];

			const response = await fetch('https://localhost:5001/api/auth/signin', {
				method: "POST",
				body: new FormData(form)
			});

			if(response.ok) {
				const userData = await response.json();
				
				navigate('/user/profile', {
					replace: true,
					state: userData
				});
			}
			else {
				if(response.status === 404)
					setFormError({
						title: "Dirección no encontrada.",
						message: await response.text()
					});
				else if(response.status >= 500 && response.status <= 599)
					setFormError({
						title: "Hubo un problema con el servidor.",
						message: await response.text()
					});
				else
					setFormError({
						title: "Ocurrió un problema al procesar la solicitud.",
						message: await response.text()
					});
			}*/
		}
		catch(error) {
			return {
				title: "Ocurrió un error inesperado. Inténtelo más tarde.",
				message: error
			}
		}
	}

	/*const saludo = async () => {
		const response = await fetch('https://localhost:5001/api/auth/saludojoker', {
			method: "GET",
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMmM3NTY3MC1iMjg5LTQxNTQtOTg5Yy0wOGRhNzQ5Zjc2MGQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiam9rZXJfYXJraGFtIiwianRpIjoiYjBjMzEyOTgtZTA5YS00MjhjLTk2ZTgtNzE4NDZmNTlmZGU4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIwMmM3NTY3MC1iMjg5LTQxNTQtOTg5Yy0wOGRhNzQ5Zjc2MGQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjYwNzYxNzI1LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjoiaHR0cHM6Ly93d3cubW9tZW50cy5hcHA6MzAwMCJ9.3K3xll0CwTJaWle9OGAvQy1O9mdwZ9lmv5-Qwp-0X3U'
			}
		});

		console.log(await response.text());
	}*/

	return (
		<div id="authentication_wrapper" className="card">
			<div className="card-body">
		    	<form id="login_form" name="loginForm" onSubmit={doLogin}>
		    		<legend>Accede a tu cuenta</legend><hr/>
		    		{/*formError && <p className="text-danger" style={{'whiteSpace': 'pre-wrap'}}>{`${formError.title}\nCausa: ${formError.message}`}</p>*/}
		    		<div className="mb-3">
		    			<input type="text" className="form-control" name="email" placeholder="Usuario o correo electrónico" autoFocus/>
		    		</div>
		    		<div className="mb-3">
		    			<input type="text" className="form-control" name="password" placeholder="Contraseña"/>
		    		</div>
		    		<div className="mb-3">
		    			<Link to="/auth/forgottenpassword">¿Olvidaste tu contraseña?</Link>
		    		</div>
		    		<button type="submit" className="btn btn-primary">Ingresar</button>
		    	</form>
		    	{/*<button type="button" onClick={saludo}>saludo</button>*/}
			</div>
		</div>
    );
}

export default Login;