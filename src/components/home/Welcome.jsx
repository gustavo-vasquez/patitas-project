import {Outlet} from 'react-router-dom';
import LandingPage from './LandingPage';
import Testimonials from './welcome_sections/Testimonials';
import MobileApps from './welcome_sections/MobileApps';
import Features from './welcome_sections/Features';

function Welcome() {
    return (
        <>
            <section>
                <LandingPage></LandingPage>
            </section>
            <section>
                <Features></Features>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <MobileApps></MobileApps>
            </section>
            <Outlet/>
        </>
    );
}

export default Welcome;