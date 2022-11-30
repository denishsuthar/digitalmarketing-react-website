import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';


const Institutional = () => {
    return (
        <>
        {/* <h1 className="team-heading">Institutional</h1>
          <div className="profile-area">
            <div className="container web shadow-none">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card ds shadow-none border-0">
                            <div className="web ml-5"><img src="./Images/web.png" alt="web icon image"></img></div>
                            <div className="main-text">
                                <h2>Website Pro</h2>
                                <p>We build professional responsive websites optimized for the most popular search engines.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card ds shadow-none border-0">
                            <div className="web ml-5"><img src="./Images/ecom.png" alt="ecommerce icon image"></img></div>
                            <div className="main-text">
                                <h2>E-Commerce</h2>
                                <p>Increase your sales with an incredible online store, full of features and functionality.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card ds shadow-none border-0">
                            <div className="web ml-5"><img src="./Images/mobile.png" alt="mobile icon image"></img></div>
                            <div className="main-text">
                                <h2>Mobile Apps</h2>
                                <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
          </div> */}



          <div className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="main-heading-institutional col-sm-12 mt-5">
                        <h1>Institutional</h1>  
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_one"><i className="fa fa-laptop-code"></i></span>
                        <h5>Website Pro</h5>
                        <p>We build professional responsive websites optimized for the most popular search engines.</p>
                    
                </div>
                </div> 
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_two"><i className="fa fa-bag-shopping"></i></span>
                        <h5>E-Commerce</h5>
                        <p>Increase your sales with an incredible online store, full of features and functionality.</p>
                    
                </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_two"><i className="fa fa-mobile"></i></span>
                        <h5>Mobile Apps</h5>
                        <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
                    
                </div>
                </div>            
                </div>
            </div>
        </div>
        </>





    );
};

export default Institutional;