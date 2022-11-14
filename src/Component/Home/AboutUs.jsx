import React, { Component } from 'react';
import about from '../../Images/about.png';
import Image from "react-bootstrap/Image";
import aboutlogo from '../../Images/aboutlogo.png';
import Card from 'react-bootstrap/Card';
import Home from './home';
import ReactDOM from 'react-dom/client';
import Ecartnews from './ecartnews';
import CustomerCare from './customerCare';
import { Button } from "@mui/material";
import boy1 from "../../Images/img1.png";
import boy2 from "../../Images/img2.png";
import boy3 from "../../Images/img3.webp";
import boy4 from "../../Images/img4.webp";
import boy5 from "../../Images/img5.png";
import girl1 from "../../Images/gming6.png";
import girl2 from "../../Images/gimg7.webp";

export default class AboutUs extends Component {

    home = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />)
    }
    news = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Ecartnews />)
    }

    CustomerCare = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerCare />)
    }

    render() {
        return (
            <>
                <div class="container-fluid bgdesign">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal1">

                                &nbsp;&nbsp;&nbsp;
                                <li><span class="fas fa-shipping-fast bg-white"></span><Button onClick={this.home}><strong><b class="text-white">EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li >
                                    <button onClick={this.customercare} class="btn btn-light">Customer Care</button>
                                </li>
                                &nbsp;&nbsp;&nbsp;
                                <li >
                                    <button onClick={this.news} class="btn btn-light">News</button>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li >
                                    <button onClick={this.CustomerCare} class="btn btn-light">FAQs</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Image src={about} fluid />
                <h1 className='header'>About US</h1>
                <div className="whatwedo container-fluid row ">

                    <Image src={aboutlogo} fluid width={"50%"} className="image-fluid col-sm" />

                    <div className="inner">
                        <h4>What We Do</h4>
                        This website allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
We have developed it using React and Material UI for frontend.
                    </div>
                </div>

                <h3>Our Team</h3>
                <div >
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ut exercitationem iusto debitis temporibus a maxime, nesciunt nostrum nam!</h6>
                </div>

                <div className="teams container-fluid row">
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={boy1} />
                        <Card.Body>
                            <Card.Title>SACHIN KUMAR</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={boy2} />
                        <Card.Body>
                            <Card.Title>Abhay Sachan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={girl1} />
                        <Card.Body>
                            <Card.Title>Ananya Singh</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={boy3} />
                        <Card.Body>
                            <Card.Title>Barun Kumar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={boy4} />
                        <Card.Body>
                            <Card.Title>Nokom Konyak</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={girl2} />
                        <Card.Body>
                            <Card.Title>Suhana A</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} class="col-md ">
                        <Card.Img variant="top" src={boy5} />
                        <Card.Body>
                            <Card.Title>Hasnain Siddiqui</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </div>

            </>
        )
    }
}


