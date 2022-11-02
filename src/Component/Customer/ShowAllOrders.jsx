import axios from "axios";
import React from "react";
import ReactDOM from 'react-dom/client';
import PlaceOrder from "./PlaceOrder";
import CustomerMenu from "./CustomerMenu";
export default class ShowAllOrders extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            orders:[]
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Customer/ShowAllOrders/"+this.state.email).then(r=>{
            console.log(r.data);
            this.setState({orders:r.data});
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
                    {this.state.orders.map(i=>
                        <div class="card col-md-3  card_design" >
                        <img src ={i.productImage} alt="Card image" width="100%" height="50%" />
                        <p class="card-text">Product Name: {i.productName}</p>
                        <p class="card-text">Product Type: {i.productType} </p>
                        <p class="card-text">Product Brand: {i.productBrand}</p>
                        <p calss="card-text">Quantity Purchased: {i.quantityPurchased} </p>
                        <p class="card-text">Total Price: Rs {i.totalPrice} </p>
                        <p class="card-text">Delivery Status: {i.deliveryStatus} </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}