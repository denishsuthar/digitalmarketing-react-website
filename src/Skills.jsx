import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
    return (
        <>
            {/* <section id="skills" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <div className="row">
                                <h1 className="heading"> Main Skills </h1>

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">


                                    <div className="pro first">
                                        <h2 className="head">Branding - <strong>60%</strong> </h2>
                                        <ProgressBar animated now={60} />
                                        <br />
                                    </div>
                                    <div className="pro">
                                        <h2 className="head">Web Design - <strong>74%</strong> </h2>
                                        <ProgressBar animated now={74} />
                                        <br />
                                    </div>
                                    <div className="pro">
                                        <h2 className="head">Marketing - <strong>97%</strong> </h2>
                                        <ProgressBar animated now={97} />
                                        <br />
                                    </div>
                                    <div className="pro">
                                        <h2 className="head">SEO - <strong>100%</strong> </h2>
                                        <ProgressBar animated now={100} />
                                        <br />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="skills" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto mt-5">
                        <h1 className="heading">Main Skills</h1>
                        <br/>
                            <div className="pro">
                                <h2 className="head">Branding - <strong>60%</strong> </h2>
                                <ProgressBar animated now={60} />
                                <br/>
                            </div>
                            <div className="pro">
                                <h2 className="head">Web Design - <strong>74%</strong> </h2>
                                <ProgressBar animated now={74} />
                                <br/>
                            </div>
                            <div className="pro">
                                <h2 className="head">Marketing - <strong>97%</strong> </h2>
                                <ProgressBar animated now={97} />
                                <br/>
                            </div>
                            <div className="pro">
                                <h2 className="head">SEO - <strong>100%</strong> </h2>
                                <ProgressBar animated now={100} />
                                <br/>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>





    );
};


export default Skills;