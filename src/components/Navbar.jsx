import {Link} from 'react-router-dom';
import {Search} from './Search';

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className='img-fluid patitas-logo' src='/img/patitas.png' alt="patitas_logo"/> Patitas</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#">Sobre nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Tutorial</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Como aportar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contacto</Link>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto me-4">
                        <Search/>
                    </div>
                    <ul className="navbar-nav">
                        <li>
                            <button id="signin" className='btn btn-primary'>Acceder</button>
                        </li>
                    </ul>
                    {/*<span className="nav-text-username">cosme_fulanito</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/profile" title="cosme.fulanito@gmail.com"><img className="img-fluid nav-profile-picture" width="20" height="20" src="/img/default_profile_picture.png" alt="profile_picture"/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/settings" title="Configuración"><i className="bi bi-gear-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/logout" title="Salir"><i className="bi bi-box-arrow-in-right"></i></Link>
                        </li>
    </ul>*/}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;