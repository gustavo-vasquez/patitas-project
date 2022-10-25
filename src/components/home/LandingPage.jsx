function LandingPage() {
    return (
        <div className="landing-page">
            <div className="row">
                <div className="col-6">
                    <div className="legend-wrapper">
                        <h1>Acá deberia estar la portada del proyecto</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="btn btn-lg btn-primary">Únete a la comunidad</button>
                    </div>
                </div>
                <div className="col-6">
                    <img className="img-fluid" src="/img/patitas.png" alt="patitas_logo"/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;