import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
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

    return (
        <>
        <div className="overlay"></div>
        <div id="authentication_wrapper" className="card">
            <div className="card-body">
                <form>
                    <legend>Únete y empieza a compartir</legend>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Nombre de usuario" autoFocus/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Correo electrónico"/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Repetir contraseña"/>
                    </div>
                    <div className="pt-2 pb-4 form-check text-start">
                        <input type="checkbox" className="form-check-input" id="terms_and_conditions"/>
                        <label className="form-check-label" htmlFor="terms_and_conditions">Comprendo y acepto los <Link to="/auth/terms">términos y condiciones</Link>.</label>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Crea tu cuenta</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;