import axios from "axios";
import React from "react";
import ReactDOM from 'react-dom/client';
import PlaceOrder from "./PlaceOrder";
import CustomerMenu from "./CustomerMenu";
import ShowAllOrders from "./ShowAllOrders";
import SearchProductCustomer from "./SearchProductCustomer";
import ShowWishList from "./ShowWishList";
import Home from "../Home/home";
import ShoppingCarticon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import swal from 'sweetalert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FormLabel, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@mui/material";
import UserDetails from "../Authenticate/View_User";
export default class ShowCart extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            products:[]
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Customer/ShowAllCart/"+this.state.email).then(r=>{
            console.log(r.data);
            if(r.data.length<1)
            {
                swal("Empty!", "Your Cart is empty!", "warning");
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>);
            }
            this.setState({products:r.data});
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

    Order=()=>{
        let i=0;
        for(i=0;i<this.state.products.length;i++)
        {
            var prod=this.state.products[i];
            const o={
                emailId:this.state.email,
                sellerEmailId:prod.sellerEmailId,
                productId:prod.productId,
                productType:prod.productType,
                productName:prod.productName,
                productBrand:prod.productBrand,
                productImage:prod.productImage,
                productPrice:prod.productPrice,
                productDescription:prod.productDescription,
                shippingCost:prod.shippingCost,
                quantityPurchased:1,
                deliveryStatus:"On The Way"
            }
            console.log(o);
            axios.post("http://localhost:5041/api/Customer/AddOrder",o).then(r=>{
            })
        }   
        if(i==this.state.products.length)
        {
            swal("Ordered", "Order Placed Successfully!", "success");
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<ShowAllOrders/>);
        }     
    }

    emptycart=()=>{
        axios.delete("http://localhost:5041/api/Customer/EmptyCart/"+this.state.email).then(r=>{
            if(r.data)
            {
                swal("Cart Empty!", "No Products Found", "warning");
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>); 
            }
        })
    }

    customermenu=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu/>);
    }

    deleteItem=(i)=>{
        axios.delete("http://localhost:5041/api/Customer/DeleteItemFromCart/"+i.cartId).then(r=>{
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<ShowCart/>);
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
    render()
    {
        return(
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
                            <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >My Cart</h2>
                        </div>
                <div class="row">
                    {this.state.products.map(i=>
                        <div class="card col-md-3  card_design" style={{width:"195px",height:"400px"}} >
                        <img src ={i.productImage} alt="Card image"/>
                        <p><b>Product Name:</b> {i.productName}<br/>
                        <b>Product Type:</b> {i.productType}<br/>
                        <b>Product Brand: </b>{i.productBrand}<br/>
                        <b>Product Price: ₹ </b>{i.productPrice}<br/>
                        <b>Available Quantity: </b>{i.productQuantity} <br/>
                        <b>Product Rating: </b>{i.rating} </p>
                        <button  class="btn btn-outline-danger" onClick={this.deleteItem.bind(this,i)}>Delete</button>
                        </div>
                    )}
                </div>
                <button  class="btn btn-success centeralign" onClick={this.Order}>Place Order</button>
                <button  class="btn btn-danger centeralign" onClick={this.emptycart}>Empty Cart</button>
            </div>
            </div>

        </>
        )
    }
}