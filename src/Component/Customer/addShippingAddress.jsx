import { TextField, Select, MenuItem,FormLabel} from "@mui/material";
import axios from "axios";
import React from "react";
import '../../index.css';
import ReactDOM from 'react-dom/client';

export default class AddShippingAddress extends React.Component {

    constructor(){
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            name:"",
            mobNo:"",
            fullAddress:'',
            pinCode:'',
            addressType:''
        }
    }
    getData=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
    isValid=()=>{
        if(this.state.name==""||this.state.mobNo==""||this.state.fullAddress==""||this.state.pinCode==""||
        this.state.addressType=="")
        {
            return false;
        }
        return true;
    }
    addDeliveryAddress=(e)=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        e.preventDefault();
        let mobNo=this.state.mobNo;
        let pinCode=this.state.pinCode;
        if(mobNo.length!=10 || mobNo[0]==0)
        {
            alert("Mobile Number must be 10 digit and Cannot Start with 0");
            return ;
        }
        if(pinCode.length!=6)
        {
            alert("Please Enter a Valid Pin Code\nPin Code must be a 6 digit number!!");
            return ;
        }

        const addr={
            name:this.state.name,
            phoneNo:mobNo,
            fullAddress:this.state.fullAddress,
            pinCode:pinCode,
            addrType:this.state.addressType,
            emialId:this.state.email
        }

        axios.post("http://localhost:5041/api/Customer/AddShippingAddress/",addr).then(r=>{
            if(r.data)
            {
                alert("Delivery Address Added Successfully!!!");
                root.render(<AddShippingAddress/>);
            }
            else{
                alert("Operation Failed !!!");
                root.render(<AddShippingAddress/>);
            }
        })
    }
    render() {
        return (
            <div className="container-fluid">

            <div className="centeralign">
                <h1 style={{color:"Red", fontsize:"clamp(1rem, 1vw, 1rem)"}}>Add Shipping Address Form</h1><br/>
                <div className="space">
                    <TextField variant="filled" label="Name" type={"text"} name="name" fullWidth onInput={this.getData} required/>
                </div>
                <div className="space">
                    <TextField variant="filled" label="Mobile Number" type={"number"} name="mobNo" fullWidth onInput={this.getData} required/>
                </div>
                <div className="space">
                    <TextField variant="filled" label="Full Address" type={"text"} name="fullAddress" fullWidth onInput={this.getData} required/>
                </div>
                <div className="space">
                    <TextField variant="filled" label="Pin Code" type={"number"} name="pinCode" fullWidth onInput={this.getData} required/>
                </div>
                <div className="space">
                    <FormLabel htmlFor="addressType" className="labels">Select Address Type</FormLabel>
                    <Select  name="addressType" className="menusize" onChange={this.getData} required>
                        <MenuItem value="" >Select</MenuItem>
                        <MenuItem value="Home">Home</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </div>
                <br/>
                <button className="btn btn-success" 
                onClick={this.addDeliveryAddress} disabled={!this.isValid()} >Add Delivery Address</button>
            </div>
            </div>
        )
    }
}