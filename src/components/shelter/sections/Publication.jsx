import {useState,useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

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
                </div>
            </div>
        </div>
        </>
    );
}

export default Publication;