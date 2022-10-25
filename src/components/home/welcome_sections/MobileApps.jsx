import {Link} from 'react-router-dom';

function MobileApps() {
    return (
        <div className="mobile-apps-wrapper">
            <i className="bi bi-phone-vibrate"></i>
            <h1>Descarga nuestra app móvil</h1>
            <p>¡Nuestra aplicación está disponible para cualquier dispositivo Android o iOS! ¡Descárgalo ahora para comenzar!</p>
            <div className="badges">
                <Link className="badge-link" to="/img/google-play-badge.svg" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid" src="/img/google-play-badge.svg" alt="google_play_link" />
                </Link>
                <Link className="badge-link" to="/img/app-store-badge.svg" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid" src="/img/app-store-badge.svg" alt="app_store_link" />
                </Link>
            </div>
        </div>
    );
}

export default MobileApps;