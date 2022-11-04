import React, { Component } from 'react';
import furniture from '../../Images/Furniture.png';
import Image from "react-bootstrap/Image";
import logo from '../../Images/banner.jpg';
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
                    <div>
                        <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-secondary text-white centerstyle" >About Us</h2>
                    </div>
                    <div>
                        <div className="inner text-light">
                            <br />
                            <br />
                            <h3>What We Do</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus rem corrupti in ab eaque dolore nemo enim iusto? Excepturi aut amet laudantium optio sequi iusto eius quia quidem fugit!
                        </div>
                    </div>
                    <br/><br/>

                    <h3 className="inner text-light">Our Team</h3>
                    <div className="inner text-light" >
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita ut exercitationem iusto debitis temporibus a maxime, nesciunt nostrum nam!</h6>
                        <br/><br/>
                    </div>

                    <div className="row">
                        <Card class="col-md card_design">
                            <Card.Img variant="top" src={boy1} />
                            <Card.Body>
                                <Card.Title>SACHIN KUMAR</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={boy2} />
                            <Card.Body>
                                <Card.Title>Abhay Sachan</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <i class="bi bi-facebook"></i>
                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={girl1} />
                            <Card.Body>
                                <Card.Title>Ananya Singh</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <i class="bi bi-facebook"></i>
                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={boy3} />
                            <Card.Body>
                                <Card.Title>Barun Kumar</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={boy4} />
                            <Card.Body>
                                <Card.Title>Nokom Konyak</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={girl2} />
                            <Card.Body>
                                <Card.Title>Suhana A</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  class="col-md card_design">
                            <Card.Img variant="top" src={boy5} width="50%" height="50%" />
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
                    <div class="container-fluid">

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
                                            ekart.shopping@gmail.com
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

            </>
        )
    }
}



