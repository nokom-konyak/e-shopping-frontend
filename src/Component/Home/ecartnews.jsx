import React, { Component } from "react";
import hello from "../../img/hello.webp";
import internet from "../../img/internet.webp";
import latin from "../../img/latin.webp";
import original from "../../img/original.webp";
import prediatrician from "../../img/prediatrician.webp";
import shopp from "../../img/shopp.webp";
import foot from "../../img/foot.webp";
import empl from "../../img/empl.webp";
import engin from "../../img/engin.webp";
import ews from "../../img/aws.webp";
import doctor from "../../img/doctor.webp";
import sett from "../../img/sett.webp";
import ai from "../../img/ai.webp";
import toy from "../../img/toy.webp";
import work from "../../img/work.webp";
import mental from "../../img/mental.webp";
import pay from "../../img/pay.webp";
import ReactDOM from 'react-dom/client';
import Home from "./home";
import AboutUs from "./AboutUs";
import {  Button} from "@mui/material";
import CustomerCare from "./customerCare";



export default class Ecartnews extends Component {


    home = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />)
    }

    aboutUs = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AboutUs />)
    }
    customerCare = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerCare />);
    }
    render() {
        return (
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-black bg-black">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal1">

                            &nbsp;&nbsp;&nbsp;
                            <li><span class="fas fa-shipping-fast bg-white"></span><Button onClick={this.home}><strong><b class="text-white">EKart Shopping</b></strong></Button></li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li >
                                <button onClick={this.aboutUs} class="btn btn-light">About Us</button>
                            </li>
                            &nbsp;&nbsp;&nbsp;
                            <li >
                            <button onClick={this.customerCare} class="btn btn-light">Customer Care</button>
                            </li>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <li >
                                <button onClick={this.customerCare} class="btn btn-light">FAQs</button>
                            </li>
                        </ul>
                    </div>
                </nav>



                <div class="border border-warning  border border-1 ">
                    <h1 class="p-3 mb-2 bg-info text-white">Recent News</h1>


                    <div class="shadow-lg p-3 mb-5 bg-white rounded row">


                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={hello}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Meet 7 adorable Ekart superfans dressed up
                                    as delivery drivers this Halloween
                                </p>
                            </div>
                        </div>
                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={internet}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    11 practical internet safety tips for
                                    keeping kids and teens safe online
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;

                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={latin}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    7 Latin American fashion designers to have on your radar,
                                    according to Luxury Stores at Ekart
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;





                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={original}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    From new products to Walt’s original plane,
                                    here are 6 cool things we saw at Disney’s ultimate fan expo
                                </p>
                            </div>
                        </div>


                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={prediatrician}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Helpful tips for parents on how to navigate online advertising and keep their kids safe
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;
                    </div>
                    <div class="shadow-lg p-3 mb-5 bg-white rounded row">


                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={shopp}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    15 tips to get the most out of shopping on Ekart
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;





                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={empl}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    These Ekart employees are on a mission to build a
                                    more accessible world through technology
                                </p>
                            </div>
                        </div>
                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={engin}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Ekart engineers and scientists honored for work in space travel, search, and robotics

                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;

                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={ews}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    5 ways AWS re/Start training prepares people for careers in cloud computing
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;





                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={doctor}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    How this startup uses AWS to bring life-saving expertise to every doctor’s office
                                </p>
                            </div>
                        </div>


                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={ai}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Ekart’s new head of Alexa shares his vision for the future,
                                    including new shopping and entertainment features
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;
                    </div>
                    <div class="shadow-lg p-3 mb-5 bg-white rounded row">


                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={sett}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Ekart expands satellite manufacturing at newly acquired Project Kuiper facility
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;









                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={foot}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    How to watch ‘Thursday Night Football’ on Prime Video
                                </p>
                            </div>
                        </div>


                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={toy}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    A reading list to honor Indigenous Peoples Day
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;



                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={mental}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    6 new mental health benefits and resources for Ekart employees
                                </p>
                            </div>
                        </div>

                        &nbsp;
                        &nbsp;




                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={work}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Ekart invests nearly $1 billion in increased wages for operations employees
                                </p>
                            </div>
                        </div>




                        &nbsp;
                        &nbsp;






                        <div class="card innerbox col-md" style={{ width: '18rem' }}>
                            <img
                                class="card-img-top"
                                src={pay}
                                alt="Card cap"

                            />
                            <div class="card-body">
                                <p class="card-text">
                                    Ekart pays college tuition for front-line employees
                                </p>
                            </div>
                        </div>
                    </div>

                </div>





                &nbsp;
                &nbsp;

                <footer class="text-center text-lg-start bg-light text-muted">
                    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div class="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="https://www.facebook.com/" class="me-4 text-reset">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="http://www.twitter.com/share?url=http://www.google.com/"
                                class="me-4 text-reset"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.google.com/" class="me-4 text-reset">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="https://www.instagram.com/" class="me-4 text-reset">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/" class="me-4 text-reset">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/" class="me-4 text-reset">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section class="">
                        <div class="container text-center text-md-start mt-5">
                            <div class="row mt-3">
                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4">
                                        <i class="fas fa-gem me-3"></i>Ekart Shopping
                                    </h6>
                                    <p>
                                        We use cookies to provide you with a customized user
                                        experience. By continuing to browse this site, you consent
                                        to the use of cookies. For more details on our cookie
                                        practices and options for disabling cookies, please see our
                                        cookie policy.
                                    </p>
                                </div>

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Electronics
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Mobiles
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Mens_Wear
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Gadegt
                                        </a>
                                    </p>
                                </div>

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">
                                            Help
                                        </a>
                                    </p>
                                </div>

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4">Contact us</h6>
                                    <p>
                                        <i class="fas fa-home me-3"></i> Address: 32, C Block, Grape
                                        Garden, 17th H Main Rd, KHB Colony, 6th Block, Koramangala,
                                        Bengaluru, Karnataka 560095
                                    </p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>
                                        Barun.kumar@tavant.com
                                    </p>
                                    <p>
                                        <i class="fas fa-phone me-3"></i> + 01 234 567 88
                                    </p>
                                    <p>
                                        <i class="fas fa-print me-3"></i> + 01 234 567 89
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="text-center p-4">
                        © 2021 Copyright:
                        <a class="text-reset fw-bold" href="https://www.tavant.com/">
                            ecart.com
                        </a>
                    </div>
                </footer>


            </div>
        );
    }
}


