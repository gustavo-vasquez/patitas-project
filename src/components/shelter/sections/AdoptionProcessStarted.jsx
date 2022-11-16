function AdoptionProcessStarted() {
    return (
        <div className="modal fade" id="startAdoptionModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <img className="img-fluid" width={200} src="/img/posts/perro_saludando.png" alt="perro_saludando"/>
                        <h2>¡Felicitaciones!</h2>
                        <p>Estás un paso más cerca de ese gran amigo que estás buscando.</p>
                        <p>El refugio se contactará contigo para coordinar una cita.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">De acuerdo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdoptionProcessStarted;