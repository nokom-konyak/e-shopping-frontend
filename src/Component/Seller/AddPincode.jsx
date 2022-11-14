import React from "react";
import 
{ TextField , FormLabel,
FormControl,Input,InputLabel, Button, Select, MenuItem, RadioGroup, Radio, FormControlLabel, FormGroup, TextareaAutosize } 
from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import RouteIcon from "@mui/icons-material/Route";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import ReactDOM from "react-dom/client";
import Login from "../Authenticate/Login";
import AddProduct from "./AddProduct";
import ShowAllOrdersOfSeller from "./ShowAllOrdersOfSeller";
import swal from 'sweetalert';
import ShowAllProductsOfSeller from "./ShowAllProductsOfSeller";

export default class AddPincode extends React.Component{
    constructor(){
        super();
        this.state = {
            pincode : '',
            email : sessionStorage.getItem("EM"),
            error : null,
            errorOpen : false
        };
    }

    errorClose = (e) =>{
        this.setState({
            errorOpen : false
        });
    }

    getData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    isValid = () =>{
        if(this.state.pincode === "" || this.state.pincode.length != 6 ) 
            return false;
        else
            return true;
    }

    AddPincodeFunction = (e) =>{
        e.preventDefault();
        const root=ReactDOM.createRoot(document.getElementById("root"))
        const pcode={
            pinCode : this.state.pincode,
            emailId : this.state.email
        };
        axios.post("http://localhost:5041/api/Seller/AddPinCode", pcode).then(r=>{
            if(r.data)
            {
                swal("Done", "Pincode Added Successfully", "success");
            return;
            }
            else{
                swal("Failed!", "Cannot Add Pincode", "warning");
            }
        })
        
    }
    home=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller/>);
    }
    myproduct=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller/>);
    }

    addprod=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddProduct/>);
    }
    addpin=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddPincode/>);
    }
    logout=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login/>);
    }
    order=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrdersOfSeller/>);
    }

    render(){
        return(
            <div className="container-fluid form">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal">
                        
                        <li class="fas fa-shipping-fast"><Button onClick={this.home}><strong><b>EKart Shopping</b></strong></Button></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <li><button onClick={this.order} class="btn btn-primary btn-square">All Orders</button> </li>
                        &nbsp;
                        <li><button onClick={this.myproduct} class="btn btn-primary btn-square">My Products</button> </li>
                        &nbsp;
                        <li><button onClick={this.addprod} class="btn btn-primary btn-square">Add Product</button> </li>
                        &nbsp;
                        <li><button onClick={this.addpin} class="btn btn-primary btn-square">Add Pincode</button> </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                        <li><button onClick={this.logout} class="btn btn-danger">Logout</button> </li>
                        
                    </ul> 
                    </div>
                </nav>
                <h3 className="container-fluid p-3 mb-2 bg-dark text-white centerstyle">Add Pincode</h3>
                <CssBaseline />
                <Paper className="paper" sx={{backgroundColor : "transparent" , boxShadow :"6px 6px 12px black"}}>
                    <Avatar>
                       <RouteIcon/>
                    </Avatar>
                <form onSubmit={this.AddPincodeFunction}>
                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="pincode" className="labels">Add PinCode</InputLabel>
                        <Input name="pincode" type="number"  disableUnderline={true} onChange={this.getData} className="inputs" />
                    </FormControl>
                    <Button disabled={!this.isValid()}
                    disableRipple
                    fullWidth
                    variant="text"
                    type="submit">Add PinCode</Button>
                </form>
                {this.state.error ? (
                    <Snackbar variant="error" key={this.state.error}
                    anchorOrigin = {
                        {
                            vertical:"bottom",
                            horizontal:"center"
                        }
                    }
                    open={this.state.errorOpen}
                    onClose={this.errorClose}
                    autoHideDuration={3000}>
                        <SnackbarContent
                        message={
                            <duv>
                                <span style={{marginRight : "8px"}}>
                                    <ErrorIcon fontSize="large" color="red" />
                                </span>
                                <span>{this.state.error}</span>
                            </duv>
                        }
                        action = {[
                            <IconButton key="close" aria-label="close" onClick={this.errorClose}>
                                <CloseIcon color="red" />
                            </IconButton>
                        ]}
                        />
                    </Snackbar>
                ):null}
                </Paper>
            </div>
        );
    }

}
