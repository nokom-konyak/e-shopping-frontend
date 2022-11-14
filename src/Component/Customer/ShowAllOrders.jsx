import axios from "axios";
import React from "react";
import { FormLabel, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@mui/material";
import ReactDOM from 'react-dom/client';
import CustomerMenu from "./CustomerMenu";
import GiveRating from "./Rating";
import SearchProductCustomer from "./SearchProductCustomer";
import ShowCart from "./ShowCart";
import ShowWishList from "./ShowWishList";
import Home from "../Home/home";
import ShoppingCarticon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserDetails from "../Authenticate/View_User";


export default class ShowAllOrders extends React.Component {
    constructor() {
        super();
        this.state = {
            email: sessionStorage.getItem("EM"),
            orders: [],
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5041/api/Customer/ShowAllOrders/" + this.state.email).then(r => {
            console.log(r.data);
            this.setState({ orders: r.data });
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

    search = () => {
        sessionStorage.setItem("productName",this.state.productName);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SearchProductCustomer/>);
    }

    customermenu = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu />);
    }

    cancel = (i) => {
        axios.put("http://localhost:5041/api/Seller/UpdateDeliveryStatus/" + i.orderId + "/Request For Cancellation").then(r => {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<ShowAllOrders />);
        })
    }

    return = (i) => {
        axios.put("http://localhost:5041/api/Seller/UpdateDeliveryStatus/" + i.orderId + "/Request For Return").then(r => {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<ShowAllOrders />);
        })
    }

    rating = (i) => {
        sessionStorage.setItem("orderId", i.orderId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<GiveRating />)
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
    userDetails = () => {
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

                                <li class="fas fa-shipping-fast"><Button onClick={this.customermenu}><strong><b>EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                <Button variant="contained" color="primary" onClick={this.userDetails} >
                                        <div>{<AccountCircleIcon/>} </div>
                                    </Button>
                                </li>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <li>
                                    <input class="form-control me-2 " type="search" placeholder="Search" onChange={this.getData} aria-label="Search" />
                                </li>
                                <li><button onClick={this.search} class="btn btn-primary">Search</button></li>
                              
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <div class="container-fluid">
                        <div>
                            <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >My Orders</h2>
                        </div>
                        <div class="row">
                            {this.state.orders.map(i =>
                                <div class="card col-md-2  card_design" style={{ width: "195px", height: "430px" }} >
                                    <img src={i.productImage} alt="Card image" />
                                    <p><b>Product Name:</b> {i.productName}<br />
                                        <b>Product Type:</b> {i.productType}<br />
                                        <b>Product Brand:</b> {i.productBrand}<br />
                                        <b>Quantity Purchased:</b> {i.quantityPurchased}<br />
                                        <b>Total Price: ₹ </b> {i.totalPrice}<br />
                                        <b>Delivery Status:</b> {i.deliveryStatus}<br /></p>
                                    <div>
                                        {i.deliveryStatus == "On The Way" ? <button class="btn btn-danger btn-sm center" onClick={this.cancel.bind(this, i)}>Cancel Order</button> : null}
                                        {i.deliveryStatus == "Delivered" ? <button class="btn btn-warning btn-sm center" onClick={this.return.bind(this, i)}>Return Order</button> : null}
                                        <br />
                                        {(i.deliveryStatus != "On The Way") && (i.deliveryStatus != "Cancelled") && (i.deliveryStatus != "Request For Cancellation") ? <button class="btn btn-info btn-sm  center" onClick={this.rating.bind(this, i)}>&nbsp;Give Rating&nbsp;</button> : null}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    </div>
                </>
                )
    }
}