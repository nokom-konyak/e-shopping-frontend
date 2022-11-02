import React from "react";
import ReactDOM from 'react-dom/client';
import ShoppingCarticon from "@mui/icons-material/ShoppingCart";
import { FormLabel,FormControl,Input,InputLabel, Button, Select, MenuItem} from "@mui/material";
import axios from "axios";
import Home from "../Home/home";
import electronics from '../../Images/electronics.png';
import Appliances from '../../Images/Appliances.png';
import Furniture from '../../Images/Furniture.png';
import Gadgets from '../../Images/Gadgets.png';
import Grocery  from '../../Images/Grocery.png';
import men  from '../../Images/men_wear.png';
import mobiles from '../../Images/Mobiles.png';
import PlaceOrder from "./PlaceOrder";
import ShowAllOrders from "./ShowAllOrders";
import ShowCart from "./ShowCart";

export default class CustomerMenu extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            productName:"",
            products:[],
            n:""
        }
    } 
    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Customer/ShowAllProducts").then(r=>{
            console.log(r.data);
            this.setState({products:r.data});
        })
        axios.get("http://localhost:5041/api/Customer/ShowAllCart/"+this.state.email).then(r=>{
            console.log(r.data.length);
            this.setState({n:r.data.length});
        })
    }
    getData=(e)=>{
        this.setState({productName:e.target.value})
    }
    
    home=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home/>)
    }

    search=()=>{
        
    }

    AddToCart=(i)=>{

        const c={
            emailId:this.state.email,
            sellerEmailId:i.emailId,
            productId:i.productId,
            productType:i.productType,
            productName:i.productName,
            productBrand:i.productBrand,
            productImage:i.productImage,
            productPrice:i.productPrice,
            productDescription:i.productDescription,
            shippingCost:i.shippingCost
        }
        console.log(c)
        axios.post("http://localhost:5041/api/Customer/AddToCart",c).then(r=>{
            if(r.data)
            {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>)
            }
            else{
                return;
            }
        })

    }

    AddToWishlist=(i)=>{
        const w={
            emailId:this.state.email,
            sellerEmailId:i.emailId,
            productId:i.productId,
            productType:i.productType,
            productName:i.productName,
            productBrand:i.productBrand,
            productImage:i.productImage,
            productPrice:i.productPrice,
            productDescription:i.productDescription,
            shippingCost:i.shippingCost
        }
        console.log(w)
        axios.post("http://localhost:5041/api/Customer/AddToWishList",w).then(r=>{
            if(r.data)
            {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>)
            }
            else{
                return;
            }
        })
    }

    Order=(i)=>{
        sessionStorage.setItem("productId",i.productId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<PlaceOrder/>);        
    }

    OrderPage=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrders/>); 
    }

    ShowCart=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowCart/>); 
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
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal">
                        
                        <li class="fas fa-shipping-fast"><Button onClick={this.home}><strong><b>EKart Shopping</b></strong></Button></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li>
                            <input class="form-control me-2" type="search" placeholder="Search" onChange={this.getData} aria-label="Search"/>
                        </li>
                        <li><button onClick={this.search} class="btn btn-primary">Search</button></li> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <li><button onClick={this.OrderPage} class="btn btn-primary">My Orders</button> </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="rightcorner">
                            <Button variant="contained" color="primary" onClick={this.ShowCart} >
                                <div>{<ShoppingCarticon/>} </div>
                                <div class="badge bg-danger">{this.state.n}</div>
                            </Button>
                        </li>
                    </ul> 
                    </div>
                </nav>

                <div class="box">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{width:"100%"}} class=" card-img-top img-fluid">
                        <img src={mobiles}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class=" card-img-top img-fluid">
                        <img src={electronics}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class=" card-img-top img-fluid">
                        <img src={Appliances}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class="  card-img-top img-fluid">
                        <img src={Furniture}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class="card-img-top img-fluid">
                        <img src={Gadgets}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class=" card-img-top img-fluid">
                        <img src={men}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class=" card-img-top img-fluid">
                        <img src={men}  alt="..."/> 
                    </div>
                    <div style={{width:"100%"}} class="card-img-top img-fluid">
                        <img src={Grocery}  alt="..."/> 
                    </div>
                    
                </div>

                <div class="row" style={{height:"20px"}}>
                    {this.state.products.map(i=>
                        <div class="card col-md-3  card_design" >
                        <img src ={i.productImage} alt="Card image" width="100%" height="50%" />
                        <p class="card-text">Product Name: {i.productName}</p>
                        <p class="card-text">Product Type: {i.productType} </p>
                        <p class="card-text">Product Brand: {i.productBrand}</p>
                        <p class="card-text">Product Price: Rs {i.productPrice} </p>
                        <p class="card-text">Available Quantity: {i.productQuantity} </p>
                        <p class="card-text">Product Rating: {i.rating} </p>
                        <br/>
                        <div>
                            <button class="btn btn-outline-primary" onClick={this.AddToCart.bind(this,i)}>Add To Cart</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-outline-warning" onClick={this.AddToWishlist.bind(this,i)}>Add To Wishlist</button>
                        </div>
                        <br/>
                        <button class="btn btn-outline-success" onClick={this.Order.bind(this,i)}>Place Order</button>
                        </div>
                    )}
                </div>

            </div>
            </>
        )
    }
}

