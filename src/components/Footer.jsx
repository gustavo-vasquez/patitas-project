import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-center">
            <hr/>
            <Link className="d-inline me-4" to="#">Sobre nosotros</Link>
            <Link className="d-inline me-4" to="#">Tutorial</Link>
            <Link className="d-inline me-4" to="#">Como aportar</Link>
            <Link className="d-inline me-4" to="#">Términos y condiciones</Link>
            <Link className="d-inline" to="#">Contacto</Link>
            <div className='mt-2'>Siguénos en nuestras redes</div>
            <Link className="d-inline me-4" to="#"><i className="bi bi-facebook"></i> patitas_oficial</Link>
            <Link className="d-inline me-4" to="#"><i className="bi bi-twitter"></i> @patitasOK</Link>
            <Link className="d-inline me-4" to="#"><i className="bi bi-youtube"></i> patitas_canal_oficial</Link>
            <Link className="d-inline" to="#"><i className="bi bi-instagram"></i> @patitas</Link>
            <p>© 2022 Patitas</p>
        </footer>
    );
}

export default Footer;