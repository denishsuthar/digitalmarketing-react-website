import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Navbar from "./Navbar";
import web from "./hero-11.png"
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> We are <strong className="brand-name">Digital Marketing Agency</strong></h1>
                            <h2 className="my-3">We Offer a Full Range of Digital Marketing Services in Surat and All over India.</h2>
                        <div className="mt-3">
                            <NavLink to="/services" className="btn-get-started">Get Started</NavLink>
                        </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid animated" alt="Home image"></img>

                        </div>    
                        </div>
                        </div>
                    </div>
                </div>
            </section>
           

        </>
            




);
};


export default Hero;