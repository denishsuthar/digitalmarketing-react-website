import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Helmet } from "react-helmet";

const Services = () => {
    return (
        <>
        <Helmet>
            <title>Our Services-SonaltaDigiBiz</title>
            <meta
                name="description"
                content="Digital marketing agency in surat"
            />
            <meta
                name="keywords"
                content="Services Sonaltadigibiz"
            />
        </Helmet> 
        <div className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="section-head col-sm-12">
                        <h1>Our Services</h1>
                        <p>We are leading Digital Marketing Company in Surat</p>    
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_one"><i className="fa fa-layer-group"></i></span>
                        <h5>Graphic Design Services</h5>
                    
                </div>
                </div> 
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_two"><i className="fa fa-laptop-code"></i></span>
                        <h5>Web Development Services</h5>
                    
                </div>
                </div>    
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_three"><i className="fa fa-hashtag"></i></span>
                        <h5>Social Media Marketing</h5>
                    
                </div>
                </div>    
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_four"><i className="fa fa-google"></i></span>
                        <h5>SEO - Search Engine Optimization</h5>
                    
                </div>
                </div>    
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_five"><i className="fas fa-poll"></i></span>
                        <h5>Digital Marketing</h5>
                    
                </div>
                </div>    
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_six"><i className="fa fa-lightbulb"></i></span>
                        <h5>Lead Generation</h5>
                    
                </div>
                </div>       
                </div>
            </div>
        </div>
            

        </>
            




);
};
export default Services;