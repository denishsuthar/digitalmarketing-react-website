import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg bg-nav-custom">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><img className="logo" src="./logo.png" alt="logo"></img></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    {/* <span className="navbar-toggler-icon"></span> */}
                                    <i className="fa fa-bars-staggered mobile-menu"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                        <NavLink className="nav-link" to="/services">Services</NavLink>
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>

                </div>
            </div>



        </>

    );




};


export default Navbar;
