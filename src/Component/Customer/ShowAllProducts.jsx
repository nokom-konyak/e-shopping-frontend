import axios from "axios";
import React from "react";
import ReactDOM from 'react-dom/client';
import PlaceOrder from "./PlaceOrder";
export default class ShowAllProducts extends React.Component
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
        axios.get("http://localhost:5041/api/Customer/ShowAllProducts").then(r=>{
            console.log(r.data);
            this.setState({products:r.data});
        })
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
                alert("Product Added to Cart Successfully!!!!");
                return ;
            }
            else{
                alert("Server Error !!!!");
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
                alert("Product Added to WishList Successfully!!!!");
                return ;
            }
            else{
                alert("Server Error !!!!");
                return;
            }
        })

    }

    Order=(i)=>{
        sessionStorage.setItem("productId",i.productId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<PlaceOrder/>);        
    }

    render()
    {
        return(
            <div class="container-fluid"> 
                <div class="row">
                    {this.state.products.map(i=>
                        <div class="card col-md-3  card_design" style={{width:"200px", height:"400px"}} >
                        <img src ={i.productImage} alt="Card image"/>
                        <p><b>Product Name:</b> {i.productName}<br/>
                        <b>Product Type:</b> {i.productType}<br/>
                        <b>Product Brand:</b> {i.productBrand}<br/>
                        <b>Product Price: ₹</b> {i.productPrice}<br/>
                        <b>Available Quantity:</b> {i.productQuantity}<br/>
                        <b>Product Rating:</b> {i.rating} </p>
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
        )
    }
}