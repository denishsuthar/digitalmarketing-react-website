import React from "react";
import { NavLink } from "react-router-dom";

const FooterNew = () => {
    return (
        <>
          <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>


          </div>
          <ul className="social_icon">
            <li><a className="" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="" href="#"><i className="fa fa-instagram"></i></a></li>
            <li><a className="" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="" href="#"><i className="fa fa-linkedin"></i></a></li>

          </ul>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </ul>
          <p className="footer-para my-3"><a className="" href="#">Copyright © 2022 SonaltaDigiBiz | Made with <i className="fa fa-heart"></i> by Denish</a></p>

          </footer>


        </>
            




);
};
export default FooterNew;