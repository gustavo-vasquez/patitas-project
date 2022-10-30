import React from "react";
import {Routes,Route} from 'react-router-dom';

import Welcome from "./home/Welcome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import ShelterDetails from './shelter/ShelterDetails';

import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from './errors/NotFound';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Welcome/>}>
                        <Route path="/auth/signin" element={<Login/>}></Route>
                        <Route path="/auth/signup" element={<Register/>}></Route>
                    </Route>
                    <Route path="/user/dashboard" element={<Dashboard/>}></Route>
                    <Route path="/shelter/:id" element={<ShelterDetails/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                <Footer></Footer>
            </>
        );
    }
}

export default Layout;