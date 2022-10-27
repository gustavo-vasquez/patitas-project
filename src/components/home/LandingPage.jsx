//import {Link} from 'react-router-dom';

function scrollToFeatures(event) {
    event.preventDefault();
    
    let element = document.getElementById('features');
    
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function LandingPage() {
    return (
        <div id="landing_page">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="legend-wrapper py-4">
                        <h1>Título del landing page a desarrollar</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="btn btn-lg btn-primary">Únete a la comunidad</button>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="logo-wrapper">
                        <img className="img-fluid py-4" src="/img/patitas.png" alt="patitas_logo"/>
                    </div>
                </div>
                <div id="see_next" onClick={scrollToFeatures}>
                    <a className="text-muted" href="#features" alt="see_features">
                        <p>Descubre todo lo que puedes hacer con Patitas</p>
                        <i className="bi bi-chevron-down"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;