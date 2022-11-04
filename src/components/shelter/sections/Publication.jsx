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
			if(didMount && (event.key === 'Escape') && !document.querySelector('#exampleModal').classList.contains('show'))
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
                            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar proceso de adopción</button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
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