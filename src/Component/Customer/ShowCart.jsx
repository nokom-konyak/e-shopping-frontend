import axios from "axios";
import React from "react";
import ReactDOM from 'react-dom/client';
import PlaceOrder from "./PlaceOrder";
import CustomerMenu from "./CustomerMenu";
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
                alert("Your Cart Is Empty!!!!");
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>);
            }
            this.setState({products:r.data});
        })
    }

    Order=(i)=>{
        sessionStorage.setItem("productId",i.productId);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<PlaceOrder/>);        
    }

    emptycart=()=>{
        axios.delete("http://localhost:5041/api/Customer/EmptyCart/"+this.state.email).then(r=>{
            if(r.data)
            {
                alert("Cart Empty!!!!");
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<CustomerMenu/>); 
            }
        })
    }

    CustomerMenu=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu/>);
    }

    render()
    {
        return(
            <div class="container-fluid">
                    <button onClick={this.CustomerMenu} class="btn btn-primary" style={{backgroundColor:"black"}}>Customer Menu</button>
                <div class="row">
                    {this.state.products.map(i=>
                        <div class="card col-md-3  card_design" >
                        <img src ={i.productImage} alt="Card image" width="100%" height="50%" />
                        <p class="card-text">Product Name: {i.productName}</p>
                        <p class="card-text">Product Type: {i.productType} </p>
                        <p class="card-text">Product Brand: {i.productBrand}</p>
                        <p class="card-text">Product Price: Rs {i.productPrice} </p>
                        <p class="card-text">Available Quantity: {i.productQuantity} </p>
                        <p class="card-text">Product Rating: {i.rating} </p>
                        </div>
                    )}
                </div>
                <button  class="btn btn-success centeralign" onClick={this.Order}>Place Order</button>
                <button  class="btn btn-danger centeralign" onClick={this.emptycart}>Empty Cart</button>
            </div>
        )
    }
}