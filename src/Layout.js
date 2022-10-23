import React from "react";
import {Routes,Route} from 'react-router-dom';

import Welcome from "./components/home/Welcome";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/user/Dashboard";
import NotFound from './components/errors/NotFound';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                <Footer></Footer>
            </>
        );
    }
}

export default Layout;