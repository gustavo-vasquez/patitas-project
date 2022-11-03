import {useState,useEffect, useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Publication() {
    const navigate = useNavigate();
    const [didMount, setDidMount] = useState(false);

    const closePublication = useCallback(() => {
        document.body.style.overflow = '';
        navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    useEffect(() => {
		const goBack = (event) => {
			if(didMount && (event.key === 'Escape'))
				closePublication();
		}
		
		document.addEventListener("keydown", goBack);
		document.addEventListener("click", goBack);
        
        document.body.style.overflow = "hidden";
		setDidMount(true);

		return () => {
			document.removeEventListener("keydown", goBack);
			document.removeEventListener("click", goBack);
		}
	}, [navigate,didMount,closePublication]);

    return (
        <>
        <div className="overlay"></div>
        <div className="post-wrapper">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid post-image" src="/img/thumbnail.jpg" alt="post_image"/>
                </div>
                <div className="col-6">
                    <div className="close-button">
                        <button className="btn" type="button" title="Cerrar" onClick={closePublication}>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <div className="post-content">
                        <div className="request-adoption">
                            <h4>¿Te gustaría adoptarlo? ¿Quieres verlo en persona?</h4>
                            <Link to="/user/18/shift" className="btn btn-primary" type="button">Iniciar proceso de adopción</Link>
                        </div>
                        <div className="information">
                            <span>Nombre:</span>
                            <p><img className="img-fluid" width={20} src="/img/posts/huellas.png" alt="huella"/> Ayudante de santa</p>
                            <span>Edad aproximada:</span>
                            <p><img className="img-fluid" width={20} src="/img/posts/huellas.png" alt="huella"/> 4 años</p>
                            <span>Situación previa:</span>
                            <p><img className="img-fluid" width={20} src="/img/posts/huellas.png" alt="huella"/> En la calle</p>
                            <span>Vacunas aplicadas:</span>
                            <ul>
                                <li>Antirrábica</li>
                                <li>Polivalente</li>
                                <li>Parvovirus</li>
                            </ul>
                            <span>Raza:</span>
                            <p><img className="img-fluid" width={20} src="/img/posts/huellas.png" alt="huella"/> Labrador</p>
                            <span>Altura:</span>
                            <p><img className="img-fluid" width={20} src="/img/posts/huellas.png" alt="huella"/> 1.2m</p>
                            <p>Observaciones:</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Publication;