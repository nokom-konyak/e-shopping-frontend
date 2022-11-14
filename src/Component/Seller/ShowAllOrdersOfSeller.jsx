import React from "react";
import { Table, Input, TableContainer, FormControl, InputLabel, TableCell, TableBody, TableRow, Button } from "@mui/material";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Login from "../Authenticate/Login";
import AddProduct from "./AddProduct";
import AddPincode from "./AddPincode";
import ShowAllProductsOfSeller from "./ShowAllProductsOfSeller";
import ChangeDeliveryStatus from "./ChangeDeliveryStatus";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserDetails from "../Authenticate/View_User";
export default class ShowAllOrdersOfSeller extends React.Component {
    constructor() {
        super();
        this.state = {
            email: sessionStorage.getItem("EM"),
            product: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5041/api/Seller/ShowAllOrdersOfSeller/" + this.state.email).then(r => {
            this.setState({ product: r.data })
            console.log(this.state.product);
        })
    }
    ChangeDeliveryStatus = (i) => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        sessionStorage.setItem("OId", i.orderId);
        root.render(<ChangeDeliveryStatus />)
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
        root.render(<Login />);
    }
    order = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrdersOfSeller />);
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
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.logout} class="btn btn-danger">Logout</button> </li>

                            </ul>
                        </div>
                    </nav>
                    <div>
                    <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >Orders Received</h2>
                    </div>
                    <TableContainer sx={{ maxHeight: 500 }} >
                        <Table stickyHeader aria-label="sticky table" >
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center"><b>Product Image</b></TableCell>
                                    <TableCell align="center"><b>Product Name</b></TableCell>
                                    <TableCell align="center"><b>Product Price</b></TableCell>
                                    <TableCell align="center"><b>Quantity Purchased</b></TableCell>
                                    <TableCell align="center"><b>Total Price</b></TableCell>
                                    <TableCell align="center"><b>Delivery Status</b></TableCell>
                                </TableRow>
                                {this.state.product.map(i =>
                                    <TableRow>
                                        <TableCell align="center"><img src={i.productImage} alt="Card image" width="50%" height="50%" /> </TableCell>
                                        <TableCell align="center">{i.productName} </TableCell>
                                        <TableCell align="center">₹{i.productPrice} </TableCell>
                                        <TableCell align="center">{i.quantityPurchased} </TableCell>
                                        <TableCell align="center">₹ {i.totalPrice} </TableCell>
                                        <TableCell align="center">{i.deliveryStatus} </TableCell>
                                        <TableCell><button class="btn btn-outline-warning" onClick={this.ChangeDeliveryStatus.bind(this, i)}>Change Status</button></TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </>
        )
    }
}