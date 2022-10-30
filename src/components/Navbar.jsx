import React from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import {Search} from './Search';

function Navbar(props) {
    //const location = useLocation();
    const navigate = useNavigate();
    
    let userDataObject;
    //let {pathname} = location;
    //let username, email, profilePicture;
    //console.log(location);
    let userDataString = localStorage.getItem('userData');
    
    if(userDataString) {
        userDataObject = JSON.parse(userDataString);
    }

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userData');
        
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className="navbar bg-white fixed-top navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className='img-fluid patitas-logo' src='/img/patitas.png' alt="patitas_logo"/> <span>Patitas</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <ul className="navbar-nav auth-wrapper">
                            <li>
                                <Link id="signin" to="/auth/signin" className="btn btn-primary">Acceder</Link>
                            </li>
                        </ul>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" id="navbarSupportedContent">
                        {/*<ul className="navbar-nav">
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
                        </ul>*/}
                        <div id="search_wrapper" className="d-flex mx-auto">
                            <Search/>
                        </div>
                        {!userDataString ?
                            <ul className="navbar-nav auth-wrapper">
                                <li>
                                    <Link id="signin" to="/auth/signin" className="btn btn-primary">Acceder</Link>
                                </li>
                            </ul> :
                        <>
                            <span className="nav-text-username">{userDataObject.username}</span>
                            <ul className="navbar-nav user-actions">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/profile" title={userDataObject.email}><img className="img-fluid nav-profile-picture" width={20} src={userDataObject.profilePicture} alt="profile_picture"/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/settings" title="Configuración"><i className="bi bi-gear-fill"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/logout" onClick={logout} title="Salir"><i className="bi bi-box-arrow-in-right"></i></Link>
                                </li>
                            </ul>
                        </>}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;