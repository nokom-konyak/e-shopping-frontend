import React from "react";
import ReactDOM from 'react-dom/client';
import ShoppingCarticon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormLabel, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";
import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";
import electronics from '../../Images/electronics.png';
import Appliances from '../../Images/Appliances.png';
import Furniture from '../../Images/Furniture.png';
import toys from '../../Images/Toys.png';
import Grocery from '../../Images/Grocery.png';
import men from '../../Images/men_wear.png';
import women from '../../Images/women_wear.png';
import mobiles from '../../Images/Mobiles.png';
import news from "../../Images/news.png";
import furni from "../../Images/furniture_sh.png";
import iphone from "../../Images/iphone.png";
import CustomerCare from "./customerCare";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Home from "./home";
import SearchProductHome from "./SearchProductHome";

export default class HomeCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            productName: "",
            products: [],
            category: sessionStorage.getItem("category")
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5041/api/Customer/ShowProductByCategory/" + this.state.category).then(r => {
            console.log(r.data);
            this.setState({ products: r.data });
        })
    }
    getData = (e) => {
        this.setState({ productName: e.target.value })
    }

    home = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />);
    }

    search = () => {
        sessionStorage.setItem("productName", this.state.productName);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SearchProductHome />);
    }

    login = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login />);

    }

    AddToCart = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login />);
    }

    AddToWishlist = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login />);
    }

    register = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Register />);
    }
    Order = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login />);
    }

    customerCare = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerCare />);
    }

    click = (i) => {
        sessionStorage.setItem("category", i);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<HomeCategory />);
    }

    render() {
        return (
            <>
                <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal navsize">
                            &nbsp;&nbsp; 
                                <li class="fas fa-shipping-fast"><Button onClick={this.home}><strong><b>EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                    <input class="form-control me-2" type="search" placeholder="Search" onChange={this.getData} aria-label="Search" />
                                </li>
                                &nbsp;
                                <li><button onClick={this.search} class="btn btn-primary">Search</button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.login} class="btn btn-primary">Login</button> </li>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
                                <li><button onClick={this.register} class="btn btn-primary">Register</button> </li>
                                &nbsp;&nbsp;
                                <li >
                                    <button onClick={this.customerCare} class="btn btn-primary">Customer Care</button>
                                    &nbsp;                                      
                                </li>
                                
                                <li>
                                    <Button variant="contained" color="primary" onClick={this.login} >
                                        <div>{<FavoriteIcon />} </div>
                                        <div class="badge bg-danger">00</div>
                                    </Button>
                                </li>
                                &nbsp;
                                <li >
                                    <Button variant="contained" color="primary" onClick={this.login} >
                                        <div>{<ShoppingCarticon />} </div>
                                        <div class="badge bg-danger">00</div>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div>

                        <Container>
                            <Row md={7}>
                                <Col className='grid imagecursor'><img className="w-100" src={mobiles} alt="" onClick={this.click.bind(this, "Mobile")} /></Col>
                                <Col className='grid imagecursor'><img className="w-100" src={women} alt="" onClick={this.click.bind(this, "Women's Wear")} /> </Col>
                                <Col className='grid imagecursor'> <img className="w-100" src={electronics} alt="" onClick={this.click.bind(this, "Electronics")} /></Col>
                                <Col className='grid imagecursor'> <img className="w-100" src={Furniture} alt="" onClick={this.click.bind(this, "Furniture")} /></Col>
                                <Col className='grid imagecursor'> <img className="w-100" src={toys} alt="" onClick={this.click.bind(this, "Toys")} /></Col>
                                <Col className='grid imagecursor'> <img className="w-100" src={men} alt="" onClick={this.click.bind(this, "Men's Wear")} /></Col>
                                <Col className='grid imagecursor'> <img className="w-100" src={Grocery} alt="" onClick={this.click.bind(this, "Grocery")} /></Col>

                            </Row>
                        </Container>
                    </div>



                    <Carousel className="box">
                        <Carousel.Item >
                            <img
                                className="d-block w-100  img-fluid"
                                src={iphone}
                                width={800}
                                height={180}
                                alt="First slide"
                                max-width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100  img-fluid"
                                src={furni}
                                width={800}
                                height={180}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100  img-fluid"
                                src={news}
                                width={800}
                                height={180}
                                alt="Third slide"
                                max-width="100%"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <h1 style={{ textAlign: "center" }} >{this.state.category}</h1>

                    <div class="row">
                        {this.state.products.map(i =>
                            <div class="card col-md-2 card_design" style={{ width: "200px", height: "420px" }} >
                                <img src={i.productImage} alt="Card image" />
                                <p><b>Product Name:</b> {i.productName}<br />
                                    <b>Product Type:</b> {i.productType}<br />
                                    <b>Product Brand:</b> {i.productBrand}<br />
                                    <b>Product Price: ₹</b> {i.productPrice}<br />
                                    <b>Available Quantity:</b> {i.productQuantity}<br />
                                    <b>Product Rating:</b> {i.rating} </p>
                                {i.productQuantity < 1 ? <button class="btn btn-outline-danger">Product Out Of Stock</button> : <>
                                    <div>
                                        <button class="btn btn-outline-primary btn-sm buttonstyle" onClick={this.AddToCart.bind(this, i)}>Add To Cart</button>
                                        <button class="btn btn-outline-danger btn-sm buttonstyle1" onClick={this.AddToWishlist.bind(this, i)}>{<FavoriteIcon />}</button>
                                    </div>
                                    <br />
                                    <button class="btn btn-outline-success btn-sm" onClick={this.Order.bind(this, i)}>Buy Now</button></>}
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

