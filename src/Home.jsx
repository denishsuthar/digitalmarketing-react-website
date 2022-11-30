import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Navbar from "./Navbar";
import web from "./hero-11.png"
import { NavLink } from "react-router-dom";
import Hero from "./Hero"
import Skills from "./Skills";
import Pricing from "./Pricing";
import Team from "./Team";
import Institutional from "./Institutional";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <>
         <Helmet>
            <title>SonaltaDigiBiz</title>
            <meta
                name="description"
                content="Digital marketing agency in surat"
            />
            <meta
                name="keywords"
                content="Digital marketing agency in surat"
            />
        </Helmet>
            <Hero />
            <Institutional/>
            <Skills />
            <Pricing />
            <Team/>
            
        </>





    );
};


export default Home;