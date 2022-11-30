import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from "./Home"
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";
import FooterNew from "./FooterNew";
import Partners from "./Partners";
import Certificates from "./Certificates";
import ScrollToTop from "./ScrollToTop";
import { Helmet } from "react-helmet";


const App = () => {
    return (        
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
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
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>       
                <Route path="/services" element={<Services />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/partners" element={<Partners />}/>
                <Route path="/certificates" element={<Certificates />}/>
            </Routes>
        <Footer/>    
        {/* <FooterNew/> */}
        </BrowserRouter>        
);
};


export default App;