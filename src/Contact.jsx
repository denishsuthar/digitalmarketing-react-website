import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
        <Helmet>
            <title>Contact Us-SonaltaDigiBiz</title>
            <meta
                name="description"
                content="Digital marketing agency in surat"
            />
            <meta
                name="keywords"
                content="Contact Sonaltadigibiz"
            />
        </Helmet>
          <section className="my-5">
            <div className="text-center section-head">
                <h1>Contact Us</h1>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12 col-xxl-6 bg-contact">
                    <div className="media my-5">
                        <div className="media-body">
                        <a className="contact-icon d-flex justify-content-center align-items-center flex-column" href="tel:+919925225101"><i className="fas fa-phone my-3"></i>  +919925225101</a>
                        </div>
                    </div>

                    <div className="media my-5">
                        <a className="contact-icon d-flex justify-content-center align-items-center flex-column" href="mailto:info@sonaltadigibiz.co.in"><i className="fas fa-envelope my-3"></i>  info@sonaltadigibiz.co.in</a>
                        <div className="media-body">
                        </div>
                    </div>

                    <div className="media my-5">
                        <a className="contact-icon d-flex justify-content-center align-items-center flex-column" href="https://goo.gl/maps/LJ79saxLTyq2pkBj8"><i className="fas fa-location my-3"></i>  602, King Tower,Near Rangila Park, Ghod dod road, Surat</a>
                        <div className="media-body">
                        </div>
                    </div>
                    </div>



                    <div className="col-md-6 col-lg-6 col-12 col-xxl-6">
                    <iframe className="col-12 my-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.425012315063!2d72.80272571540391!3d21.175268888135225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ddd87af4327%3A0x7ee4e2b7d9710992!2sSonalta%20DigiBiz!5e0!3m2!1sen!2sin!4v1660039470300!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                    </div>

                    



                </div>
             

            </div>

          </section>
           

        </>
            




);
};
export default Contact;