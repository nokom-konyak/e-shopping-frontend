import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import {Table,Input,TableContainer,FormControl,InputLabel, TableCell,TableBody,TableRow} from "@mui/material";
import axios from "axios";
import CustomerMenu from "./CustomerMenu";
import ReactDOM from 'react-dom/client';
import ShowAllOrders from './ShowAllOrders';

export default class GiveRating extends React.Component
{
    constructor()
    {
        super();
        this.state={
            orderId:sessionStorage.getItem("orderId"),
            order:""
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Seller/ShowOrderById/"+this.state.orderId).then(r=>{
            this.setState({order:r.data});
        })
    }

    CustomerMenu=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu/>);
    }

    rating=(rate)=>{
        axios.put("http://localhost:5041/api/Customer/GiveProductRating/"+this.state.order.productId+"/"+rate).then(r=>{
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<ShowAllOrders/>);
        })
    }

    render()
    {
        return(
            <div class="container-fluid">
                    <button onClick={this.CustomerMenu} class="btn btn-primary" style={{backgroundColor:"black"}}>Customer Menu</button>
                    <div>
                        <h2 style={{textAlign:"center"}} className="" >Give Rating Page</h2>
                    </div>
                <div class="row box1" >
                        <div class="card col-md-2  card_design" style={{width:"300px",height:"470px"}} >
                        <img src ={this.state.order.productImage} alt="Card image" style={{width:"100%", height:"60%"}} />
                        <p><b>Product Name:</b> {this.state.order.productName}<br/>
                        <b>Product Type:</b> {this.state.order.productType}<br/>
                        <b>Product Brand:</b> {this.state.order.productBrand}<br/>
                        <b>Quantity Purchased:</b> {this.state.order.quantityPurchased}<br/>
                        <b>Total Price: ₹ </b> {this.state.order.totalPrice}<br/> 
                        <b>Delivery Status:</b> {this.state.order.deliveryStatus}<br/></p>
                        <div>
                            <Rating onClick={this.rating}/>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}
