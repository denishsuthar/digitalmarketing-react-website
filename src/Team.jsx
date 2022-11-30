import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



const Team = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    return (
        <>
            <h1 className="team-heading">Our Team</h1>
            <div className="profile-area">
                <div className="container team-bottom">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/sunil.png" alt="sunil image"></img></div>
                                <div className="main-text">
                                    <h2>Sunil Chaporkar</h2>
                                    <p>Co-Founder</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        Sunil Chaporkar, a digital marketing expert by profession, and a learner by passion. A hardcore salesman since three decades having worked for five largest corporations of their business area in the world, such as <strong> UPS, TNT Express Worldwide, G4S, Alibaba </strong> and <strong> R.R.Donnely </strong> where working with Tata Press Limited from 1998 to 2013 Alibaba and R.R.Donnely were the front assignments to represent both of them in India. Also during this period when google and facebook entered Indian markets, this organization was among first reseller of both these giant corporations and hence had an opportunity to work hand in hand with the teams of google and facebook.<br/><br/> 
                                        Having worked in Advertising space selling for a almost two decades, was lucky to manage publications such as <strong> IC Chip, Forbes, Overdrive, Better Photography </strong> and many such more than twenty magazines portfolio in the arms for space selling.
                                        The exposure to work with editorial teams for print and digital is an inspiration to write and deliver the quality content to the audience. Readers suggestions for improvement are welcome.<br/><br/>
                                        You email him at <a href='mailto:sunil.chaporkar@gmail.com'><strong>sunil.chaporkar@gmail.com</strong></a> and visit his company website <a href='https://sonaltadigibiz.co.in' target="_blank"><strong>SonaltaDigiBiz</strong></a> for more insight about his business.
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/aashish.png" alt="aashish image"></img></div>
                                <div className="main-text">
                                    <h2>Ashish Parekh</h2>
                                    <p>Co-Founder</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open1}>
                                    <div id="example-collapse-text">
                                    Ashish Parekh is the pioneer in Print Publicity and advertising in South Gujarat. He is a Bachelor of Commerce from South Gujarat University and the JCI Graduate and a Certified National Trainer from JCI India. Spent more than two decades in Advertising Industry, and diversified into Training, Skill Development and Business Consultancy, he is a proven Motivator, Speaker, Trainer and a Mentor to many of the renowned Entrepreneurs and Professionals from Surat and South Gujarat.<br/><br/>
                                    A True Leader and a Motivator, has a thorough insights of Leadership Development and Team Building, he provides mentoring and consultancy to more than 20 Business Houses.
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover1.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/denish1.png" alt="denish image"></img></div>
                                <div className="main-text">
                                    <h2>Denish Suthar</h2>
                                    <p>Web Developer</p>
                                </div>
                                <div className="socials">
                                    <a href="https://www.facebook.com/denish.suthar79" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/denish_suthar" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/denish-suthar-6a6971207" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://www.twitter.com/denish_suthar" target="_blank"><i className="fa fa-twitter"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen2(!open2)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open2}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open2}>
                                    <div id="example-collapse-text">
                                    
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/renu.png" alt="renu image"></img></div>
                                <div className="main-text">
                                    <h2>Renu Rana</h2>
                                    <p>Client Servicing</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen3(!open3)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open3}>
                                    <div id="example-collapse-text">
                                    
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/zishan.png" alt="zishan image"></img></div>
                                <div className="main-text">
                                    <h2>Zishan Chikhaliya</h2>
                                    <p>Sr. Graphic Designer</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen4(!open4)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open4}>
                                    <div id="example-collapse-text">
                                  
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/bahadur.png" alt="bahadur image"></img></div>
                                <div className="main-text">
                                    <h2>Beer Bahadur Prajapati</h2>
                                    <p>Sr. Graphic Designer</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen5(!open5)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open5}>
                                    <div id="example-collapse-text">
                                    Beer Bahadur Prajapati is a passionate and creative graphic designer has over 6 years of experience in this field. Comprehensive experience in print and digital media. Unique ideation and creative skills is his ups.
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/muskan.png" alt="muskan image"></img></div>
                                <div className="main-text">
                                    <h2>Muskan Mehta</h2>
                                    <p>Graphic Designer</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen6(!open6)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open6}>
                                    <div id="example-collapse-text">
                                    Having good experience in the management of the complete design process, from conceptualization to delivery. Skilled with Adobe Illustrator, Coral Draw, Photoshop and Canva. She thrives for the best outcome of a product in everyway.
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                                <div className="img2"><img src="./Images/prince.png" alt="prince image"></img></div>
                                <div className="main-text">
                                    <h2>Prince Patel</h2>
                                    <p>Finance & Accounts</p>
                                </div>
                                <div className="socials">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                </div>
                                <Button className='botton-card'
                                    onClick={() => setOpen7(!open7)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                >
                                    Read Info
                                </Button>
                                <Collapse in={open7}>
                                    <div id="example-collapse-text">
                                    Prince Patel is a Accountant and has over 2 years of experience in Accounting field. His good Accounting skills have been appreciated by our clients as well.
                                    </div>
                                </Collapse>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* <h1 className="team-heading">Our Team</h1>
          <div className="profile-area">
            <div className="container team-bottom">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/sunil.png" alt="sunil image"></img></div>
                            <div className="main-text">
                                <h2>Sunil Chaporkar</h2>
                                <p>Co-Founder</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/aashish.png" alt="aashish image"></img></div>
                            <div className="main-text">
                                <h2>Ashish Parekh</h2>
                                <p>Co-Founder</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover1.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/denish1.png" alt="denish image"></img></div>
                            <div className="main-text">
                                <h2>Denish Suthar</h2>
                                <p>Web Developer</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/renu.png" alt="renu image"></img></div>
                            <div className="main-text">
                                <h2>Renu Rana</h2>
                                <p>Client Servicing</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/zishan.png" alt="zishan image"></img></div>
                            <div className="main-text">
                                <h2>Zishan Chikhaliya</h2>
                                <p>Sr. Graphic Designer</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/bahadur.png" alt="bahadur image"></img></div>
                            <div className="main-text">
                                <h2>Beer Bahadur Prajapati</h2>
                                <p>Sr. Graphic Designer</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/muskan.png" alt="muskan image"></img></div>
                            <div className="main-text">
                                <h2>Muskan Mehta</h2>
                                <p>Graphic Designer</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img1"><img src="./Images/cover2.jpg" alt="banner image"></img></div>
                            <div className="img2"><img src="./Images/prince.png" alt="prince image"></img></div>
                            <div className="main-text">
                                <h2>Prince Patel</h2>
                                <p>Accountant</p>
                            </div>
                            <div className="socials">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> 
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>                                                 
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
          </div> */}
        </>





    );
};

export default Team;