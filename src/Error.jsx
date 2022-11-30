import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section id="error" className="my-5">
                <div className="text-center my-5">
                    <h1>404 ! Not Found</h1>
                </div>
                <div className="container">
                <div className="col-md-12 col-lg-12 col-12 col-xxl-12">
                    <img className="error-img img-fluid" src="./Images/error.jpg" alt="Error Image"></img>
                </div>
                <div className="text-center my-5">
                <NavLink to="/" className="btn-error">Go Home</NavLink>
                </div>
                </div>

            </section>


        </>





    );
};
export default Error;