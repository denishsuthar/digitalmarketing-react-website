import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { NavLink } from "react-router-dom";


const Pricing = () => {
    return (
        <>
        <section id="price">
        <h1 className="price-heading">Plans & Pricing</h1>
            <div className="container py-5">
                <div className="row text-center">
                
                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <div className="mainbg p-5 rounded-lg shadow">
                            <h1 className="h6 text-uppercase font-weight-bold mb-4 mainbg listfirst">Essential</h1>
                            <h2 className="h1 font-weight-bold mainbg listfirst">$129<span className="text-small font-weight-normal ml-2 mainbg listfirst"></span></h2>

                            <div className="custom-seperator my-4 mx-auto bg-light"></div>
                            <ul className="list-unstyled my-5 text-small text-left mainbg">
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Facebook & Instagram Managment
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Ad Campaign
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Content
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Monthly Progress Report
                                </li>
                                  
                            </ul>
                            <NavLink to="/contact" className="btn-get-started">Contact</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <div className="mainbg p-5 rounded-lg shadow">
                            <h1 className="h6 text-uppercase font-weight-bold mb-4 mainbg listfirst">Standard</h1>
                            <h2 className="h1 font-weight-bold mainbg listfirst">$199<span className="text-small font-weight-normal ml-2 mainbg listfirst"></span></h2>

                            <div className="custom-seperator my-4 mx-auto bg-light"></div>
                            <ul className="list-unstyled my-5 text-small text-left mainbg">
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Facebook & Instagram Managment
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> LinkedIn, Google My Business
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Ad Campaign
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Content
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Google Ads Campaign
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Monthly Progress Report
                                </li>   
                            </ul>
                            <NavLink to="/contact" className="btn-get-started">Contact</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <div className="mainbg p-5 rounded-lg shadow">
                            <h1 className="h6 text-uppercase font-weight-bold mb-4 mainbg listfirst">Premium</h1>
                            <h2 className="h1 font-weight-bold mainbg listfirst">$249<span className="text-small font-weight-normal ml-2 mainbg listfirst"></span></h2>

                            <div className="custom-seperator my-4 mx-auto bg-light"></div>
                            <ul className="list-unstyled my-5 text-small text-left mainbg">
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Facebook & Instagram Managment
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> LinkedIn, Google My Business
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Pinterest, Twitter & YouTube
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Ad Campaign
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Social Media Content
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Google Ads Campaign
                                </li> 
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Monthly Progress Report
                                </li>  
                            </ul>
                            <NavLink to="/contact" className="btn-get-started">Contact</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <div className="mainbg p-5 rounded-lg shadow">
                            <h1 className="h6 text-uppercase font-weight-bold mb-4 mainbg listfirst">SEO Suit</h1>
                            <h2 className="h1 font-weight-bold mainbg listfirst">$249<span className="text-small font-weight-normal ml-2 mainbg listfirst"></span></h2>

                            <div className="custom-seperator my-4 mx-auto bg-light"></div>
                            <ul className="list-unstyled my-5 text-small text-left mainbg">
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Keyword Research & Strategy
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Technical SEO
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Link Building
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Content Curation
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Local SEO
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Article Submision
                                </li>
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Google Analytics
                                </li> 
                                <li className="mb-3 mainbg listfirst">
                                    <i className="mr-2 text-primary fa fa-check"></i> Monthly Progress Report
                                </li>    
                            </ul>
                            <NavLink to="/contact" className="btn-get-started">Contact</NavLink>
                        </div>
                    </div>
                </div>

                

            </div>
        </section>
        </>
    );
};


export default Pricing;