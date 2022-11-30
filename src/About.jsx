import React from "react";
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <>
        <Helmet>
            <title>About Us-SonaltaDigiBiz</title>
            <meta
                name="description"
                content="Digital marketing agency in surat"
            />
            <meta
                name="keywords"
                content="About Sonaltadigibiz"
            />
        </Helmet>        
            <section id="header" className="about-heading my-5">
                <div className="text-center section-head">
                    <h1>About Us</h1>
                    <p>We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.</p>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12 col-xxl-6 header-img">
                            <img className="img-fluid animated" src="./Images/about-img.png" alt="about image"></img>
                        </div>

                        <div className="col-md-6 col-lg-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
                            <h5 className="about-content">Team Sonalta Digibiz:</h5>
                            <h6 className="about-content">Sonalta Digibiz is an established Digital Marketing Company by digital media professionals in association with Aashish Publicity Group, since two decades of specialising in.</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Web Development</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Digital Marketing</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Social Media Marketing</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Lead Generation</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Content Writing</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Search Engine Optimization</h6>
                            <h6 className="about-content"> <i className="fa fa-arrow-right"></i> Graphic Designing</h6>
                            <h6 className="about-content">Sonalta Digibiz is operating from Surat, Vadodara and Ahmedabad and providing Social Media Marketing and Optimizations solutions to Local Brands and Businesses.</h6>

                        </div>

                    </div>

                </div>


            </section>


        </>





    );
};
export default About;