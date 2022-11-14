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
            </div>
        );
    }
}


