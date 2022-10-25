import {Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Testimonials from './welcome_sections/Testimonials';
import MobileApps from './welcome_sections/MobileApps';

function Welcome() {
    return (
        <>
            <section>
                <LandingPage></LandingPage>
            </section>
            <section>
                <div>Hola que onda!</div>
                <div><Link to="/user/dashboard">enlace al dashboard</Link></div>
                <div><Link to="/usuario/inicio">enlace a un path random</Link></div>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <MobileApps></MobileApps>
            </section>
        </>
    );
}

export default Welcome;