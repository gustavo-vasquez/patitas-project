import {Link} from 'react-router-dom';
import LandingPage from './LandingPage';

function Welcome() {
    return (
        <div>
            <div>Hola que onda!</div>
            <div><Link to="/user/dashboard">enlace al dashboard</Link></div>
            <div><Link to="/usuario/inicio">enlace a un path random</Link></div>
            <LandingPage></LandingPage>
        </div>
    );
}

export default Welcome;