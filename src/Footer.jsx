import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-custom text-white pt-5 pb-4">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left bg-custom">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">SonaltaDigiBiz</h5>
                            <p className="bg-custom">Sonalta Digibiz is an established Digital Marketing Company by digital media professionals in association with Aashish Publicity Group.</p>
                            <div className="socials-footer">
                                <a href="https://www.facebook.com/Sonalta-DigiBiz-861666607212337/" target="_blank"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/SonaltaEbizCom?t=O2d1yQeOol959qTkSTTlEw&s=08" target="_blank"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/sonaltadigibiz/" target="_blank"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/sonalta-digibiz" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Company</h5>
                            <p className="bg-custom">
                                <NavLink to="/" className="text-white bg-custom list">Home</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/about" className="text-white bg-custom list">About Us</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/services" className="text-white bg-custom list">Services</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/contact" className="text-white bg-custom list">Contact</NavLink>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Useful Links</h5>
                            <p className="bg-custom">
                                <NavLink to="/partners" className="text-white bg-custom list">Our Partners</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/certificates" className="text-white bg-custom list">Certificates</NavLink>
                            </p>
                            <p className="bg-custom">
                                {/* <a href="#" className="text-white bg-custom list">Link</a> */}
                            </p>
                            <p className="bg-custom">
                                {/* <a href="#" className="text-white bg-custom list">Link</a> */}
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Contact Us</h5>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="tel:+919925225101"><i className="fas fa-phone mr-3 bg-custom"></i>  +919925225101</a>
                            </p>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="mailto:info@sonaltadigibiz.co.in"><i className="fas fa-envelope mr-3 bg-custom"></i> info@sonaltadigibiz.co.in</a>
                            </p>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="https://goo.gl/maps/LJ79saxLTyq2pkBj8" target="_blank"><i className="fas fa-building mr-3 bg-custom"></i> 602, King Tower,Near Rangila Park, Ghod dod road, Surat</a>
                            </p>
                        </div>

                        <h5 className="bg-custom mt-5 copyright"><a className="bg-custom" href="https://www.instagram.com/denish_suthar" target="_blank">Copyright © 2022 SonaltaDigiBiz | Made with <i className="fa fa-heart"></i> by Denish</a></h5>

                    </div>

                </div>
            </footer>


        </>





    );
};
export default Footer;