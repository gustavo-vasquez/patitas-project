import React from "react";
import {Routes,Route} from 'react-router-dom';

import Welcome from "./home/Welcome";
import AuthenticationForms from "./auth/AuthenticationForms";
//import Register from "./auth/Register";
import Notifications from "./user/Notifications";
import Shelter from './shelter/Shelter';
import ShelterDetails from './shelter/ShelterDetails';
import Publication from "./shelter/sections/Publication";
import Missing from "./forum/Missing";

import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from './errors/NotFound';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Welcome/>}></Route>
                    <Route path="/auth/signin" element={<AuthenticationForms/>}></Route>
                    <Route path="/user/notifications" element={<Notifications/>}></Route>
                    <Route path="/shelter" element={<Shelter/>}>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                    <Route path="/shelter/:id" element={<ShelterDetails/>}>
                        <Route path="/shelter/:id/publication/:postid" element={<Publication/>}></Route>
                    </Route>
                    <Route path="/forum/missing" element={<Missing/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                <Footer></Footer>
            </>
        );
    }
}

export default Layout;