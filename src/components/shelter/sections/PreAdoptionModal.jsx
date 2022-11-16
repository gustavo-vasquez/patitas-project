import PreAdoptionForm from "../../user/PreAdoptionForm";

function PreAdoptionModal() {
    return (
        <div className="modal fade" id="preAdoptionModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <PreAdoptionForm/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#startAdoptionModal">Guardar y finalizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreAdoptionModal;