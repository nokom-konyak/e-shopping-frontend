import React from "react";
import ReactDOM from 'react-dom/client';
import ShoppingCarticon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormLabel, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";
import Home from "../Home/home";
import electronics from '../../Images/electronics.png';
import Furniture from '../../Images/Furniture.png';
import toys from '../../Images/Toys.png';
import Grocery from '../../Images/Grocery.png';
import men from '../../Images/men_wear.png';
import women from '../../Images/women_wear.png';
import mobiles from '../../Images/Mobiles.png';
import PlaceOrder from "./PlaceOrder";
import ShowAllOrders from "./ShowAllOrders";
import ShowCart from "./ShowCart";
import news from "../../Images/news.png";
import furni from "../../Images/furniture_sh.png";
import iphone from "../../Images/iphone.png";
import Carousel from 'react-bootstrap/Carousel';
import ShowWishList from "./ShowWishList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CustomerCategory from "./CustomerCategory";
import SearchProductCustomer from "./SearchProductCustomer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserDetails from "../Authenticate/View_User";

export default class CustomerMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            email: sessionStorage.getItem("EM"),
            productName: "",
            products: [],
            n: "",
            nn:""
    }
    }
    componentDidMount() {
        axios.get("http://localhost:5041/api/Customer/ShowAllProducts").then(r => {
            console.log(r.data);
            this.setState({ products: r.data });
        })
        axios.get("http://localhost:5041/api/Customer/ShowAllCart/" + this.state.email).then(r => {
            console.log(r.data.length);
            this.setState({ n: r.data.length });
        })
        axios.get("http://localhost:5041/api/Customer/ShowAllWishlist/"+this.state.email).then(r=>{
            this.setState({nn:r.data.length});
            console.log(r.data.length);
        })
    }
    getData = (e) => {
        this.setState({ productName: e.target.value })
    }

    customermenu = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu />)
    }

    search = () => {
        sessionStorage.setItem("productName",this.state.productName);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SearchProductCustomer/>);
    }

    AddToCart = (i) => {

        const c = {
            emailId: this.state.email,
            sellerEmailId: i.emailId,
            productId: i.productId,
            productType: i.productType,
            productName: i.productName,
            productBrand: i.productBrand,
            productImage: i.productImage,
            productPrice: i.productPrice,
            productDescription: i.productDescription,
            shippingCost: i.shippingCost
        }
        console.log(c)
        axios.post("http://localhost:5041/api/Customer/AddToCart", c).then(r => {
            if (r.data) {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu />)
            }
            else {
                return;
            }
        })

    }

    AddToWishlist = (i) => {
        const w = {
            emailId: this.state.email,
            sellerEmailId: i.emailId,
            productId: i.productId,
            productType: i.productType,
            productName: i.productName,
            productBrand: i.productBrand,
            productImage: i.productImage,
            productPrice: i.productPrice,
            productDescription: i.productDescription,
            shippingCost: i.shippingCost
        }
        console.log(w)
        axios.post("http://localhost:5041/api/Customer/AddToWishList", w).then(r => {
            if (r.data) {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu />)
            }
            else {
                return;
            }
        })
    }

    Order = (i) => {
        sessionStorage.setItem("productId", i.productId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<PlaceOrder />);
    }

    OrderPage = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrders />);
    }

    ShowCart = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowCart />);
    }

    showWishList=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowWishList />);
    }

    logout=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home/>);
    }

    click=(i)=>{
        sessionStorage.setItem("category",i);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerCategory/>);
    }

    userDetails=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UserDetails/>);
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
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal">

                                <li class="fas fa-shipping-fast"><Button onClick={this.customermenu}><strong><b>EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                <Button variant="contained" color="primary" onClick={this.userDetails} >
                                        <div>{<AccountCircleIcon/>} </div>
                                    </Button>
                                </li>
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                <li>
                                    <input class="form-control me-2 " type="search" placeholder="Search" onChange={this.getData} aria-label="Search" />
                                </li>
                                <li><button onClick={this.search} class="btn btn-primary">Search</button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <li><button onClick={this.OrderPage} class="btn btn-primary">My Orders</button> </li>
                                &nbsp;&nbsp;
                                <li>
                                    <Button variant="contained" color="primary" onClick={this.showWishList} >
                                        <div>{<FavoriteIcon />} </div>
                                        <div class="badge bg-danger">{this.state.nn}</div>
                                    </Button>
                                </li>
                                &nbsp;
                                <li className="rightcorner">
                                    <Button variant="contained" color="primary" onClick={this.ShowCart} >
                                        <div>{<ShoppingCarticon />} </div>
                                        <div class="badge bg-danger">{this.state.n}</div>
                                    </Button>
                                </li>
                                &nbsp;
                                <li>
                                    <button class="btn btn-danger" onClick={this.logout}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div>

                        <Container>
                            <Row md={7}>
                                <Col className='grid '><img className="w-100" src={mobiles} alt=""  onClick={this.click.bind(this,"Mobile")}/></Col>
                                <Col className='grid'><img className="w-100" src={women} alt="" onClick={this.click.bind(this,"Women's Wear")}/> </Col>
                                <Col className='grid'> <img className="w-100" src={electronics} alt="" onClick={this.click.bind(this,"Electronics")}/></Col>
                                <Col className='grid'> <img className="w-100" src={Furniture} alt="" onClick={this.click.bind(this,"Furniture")}/></Col>
                                <Col className='grid'> <img className="w-100" src={toys} alt="" onClick={this.click.bind(this,"Toys")}/></Col>
                                <Col className='grid'> <img className="w-100" src={men} alt="" onClick={this.click.bind(this,"Men's Wear")}/></Col>
                                <Col className='grid'> <img className="w-100" src={Grocery} alt="" onClick={this.click.bind(this,"Grocery")}/></Col>

                            </Row>
                        </Container>
                    </div>

                    <Carousel className="box">
                        <Carousel.Item className="innerbox">
                            <img
                                className="d-block w-100  img-fluid"
                                src={iphone}
                                width={800}
                                height={180}
                                alt="First slide"
                                max-width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="innerbox">
                            <img
                                className="d-block w-100  img-fluid"
                                src={furni}
                                width={800}
                                height={180}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="innerbox">
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

                    <div class="row">
                        {this.state.products.map(i =>
                            <div class="card col-md-2 card_design" style={{width:"200px", height:"400px"}} >
                                <img src={i.productImage}  alt="Card image"/>
                                <p><b>Product Name:</b> {i.productName}<br/>
                                <b>Product Type:</b> {i.productType}<br/>
                                <b>Product Brand:</b> {i.productBrand}<br/>
                                <b>Product Price: ₹ </b>{i.productPrice}<br/>
                                <b>Available Quantity:</b> {i.productQuantity}<br/>
                                 <b>Product Rating:</b> {i.rating} </p>
                                 {i.productQuantity<1?<button class="btn btn-outline-danger">Product Out Of Stock</button>:<>
                                <div>
                                    <button class="btn btn-outline-primary btn-sm buttonstyle" onClick={this.AddToCart.bind(this, i)}>Add To Cart</button>
                                    <button class="btn btn-outline-danger btn-sm buttonstyle1" onClick={this.AddToWishlist.bind(this, i)}>{<FavoriteIcon />}</button>
                                </div>
                                <br/>
                                <button class="btn btn-outline-success btn-sm" onClick={this.Order.bind(this, i)}>Buy Now</button></>}
                            </div>
                        )}
                    </div>

                </div>
            </>
        )
    }
}

