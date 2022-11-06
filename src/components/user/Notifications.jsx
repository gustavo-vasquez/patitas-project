function Notifications() {
    return (
        <div className="notifications-wrapper">
            <h1>Notificaciones</h1>
            <h3><i className="bi bi-eye-slash"></i> No leídas</h3>
            <div className="card notification text-center">
                <div className="card-header">El Refugio #1 ha respondido tu solicitud de adopción</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-primary me-4">Cancelar adopción</button>
                    <button type="button" className="btn btn-primary me-4">Confirmo asistencia</button>
                    <button type="button" className="btn btn-primary">Reprogramar cita</button>
                </div>
                <div className="card-footer text-muted">5/11/2022 21:30 hs.</div>
            </div>

            <h3><i className="bi bi-eye"></i> Leídas</h3>
            <div className="card notification text-center">
                <div className="card-header">El Refugio #1 ha respondido tu solicitud de adopción</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-primary me-4">Cancelar adopción</button>
                    <button type="button" className="btn btn-primary me-4">Confirmo asistencia</button>
                    <button type="button" className="btn btn-primary">Reprogramar cita</button>
                </div>
                <div className="card-footer text-muted">5/11/2022 21:30 hs.</div>
            </div>
        </div>
    );
}

export default Notifications;