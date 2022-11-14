import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { FormLabel, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@mui/material";
import Login from "../Authenticate/Login";
import AddProduct from "./AddProduct";
import AddPincode from "./AddPincode";
import ShowAllOrdersOfSeller from "./ShowAllOrdersOfSeller";
import UpdateProduct from "./UpdateProduct";
import news from "../../Images/news.png";
import furni from "../../Images/furniture_sh.png";
import iphone from "../../Images/iphone.png";
import Carousel from 'react-bootstrap/Carousel';
import Home from "../Home/home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserDetails from "../Authenticate/View_User";
import swal from 'sweetalert';

export default class ShowAllProductsOfSeller extends React.Component {
    constructor() {
        super();
        this.state = {
            email: sessionStorage.getItem("EM"),
            products: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5041/api/Seller/ShowAllProductsOfSeller/" + this.state.email).then(r => {
            console.log(r.data);
            this.setState({ products: r.data });
        })
    }

    DeleteProduct = (i) => {
        const root = ReactDOM.createRoot(document.getElementById('root'));

        axios.delete("http://localhost:5041/api/Seller/DeleteProduct/" + i.productId).then(r => {
            if (r.data) {
                swal("Success!", " Product Deleted Successfully!", "success");
                root.render(<ShowAllProductsOfSeller />);
            }
            else {
                swal("Failed!", "Cannot Delete Product", "warning");
                return;
            }
        })

    }
    home = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller />);
    }
    myproduct = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller />);
    }

    addprod = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddProduct />);
    }
    addpin = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddPincode />);
    }
    logout = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />);
    }
    order = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrdersOfSeller />);
    }
    UpdateProduct = (i) => {
        sessionStorage.setItem("PID", i.productId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UpdateProduct />);
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
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal navsize">
                            &nbsp;&nbsp;
                                <li class="fas fa-shipping-fast"><Button onClick={this.home}><strong><b>EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                <Button variant="contained" color="primary" onClick={this.userDetails} >
                                        <div>{<AccountCircleIcon/>} </div>
                                    </Button>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.order} class="btn btn-primary btn-square">All Orders</button> </li>
                                &nbsp;
                                <li><button onClick={this.myproduct} class="btn btn-primary btn-square">My Products</button> </li>
                                &nbsp;
                                <li><button onClick={this.addprod} class="btn btn-primary btn-square">Add Product</button> </li>
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.logout} class="btn btn-danger">Logout</button> </li>

                            </ul>
                        </div>
                    </nav>
                    <br />
                    <Carousel className="box">
                        <Carousel.Item className="innerbox">
                            <img
                                className="d-block w-100  img-fluid"
                                src={iphone}
                                width={800}
                                height={100}
                                alt="First slide"
                                max-width="100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="innerbox">
                            <img
                                className="d-block w-100  img-fluid"
                                src={furni}
                                width={800}
                                height={100}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="innerbox">
                            <img
                                className="d-block w-100  img-fluid"
                                src={news}
                                width={800}
                                height={100}
                                alt="Third slide"
                                max-width="100%"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div class="row">
                        {this.state.products.map(i =>
                            <div class="card col-md-2 card_design" style={{ width: "190px", height: "400px" }} >
                                <img src={i.productImage} alt="Card image" />
                                <p><b>Product Name:</b> {i.productName}<br/>
                                    <b>Product Type:</b> {i.productType}<br/>
                                    <b>Product Brand:</b> {i.productBrand}<br/>
                                    <b>Product Price: ₹</b> {i.productPrice}<br/>
                                    <b>Available Quantity </b>{i.productQuantity}<br/>
                                    <b>Product Rating:</b> {i.rating}</p>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-outline-danger btn-sm" onClick={this.DeleteProduct.bind(this, i)}>Delete</button>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-outline-warning btn-sm" onClick={this.UpdateProduct.bind(this, i)}>Update</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}