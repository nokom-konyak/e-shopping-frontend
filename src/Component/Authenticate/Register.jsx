import React from "react";import { FormLabel,Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import LoginOutlinedIcon  from "@mui/icons-material/LoginOutlined";
import '../../index.css';
import axios from 'axios'
import ReactDOM from "react-dom/client";
import Home from "../Home/home";
import { hover } from "@testing-library/user-event/dist/hover";


export default class Register extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pwd:'',
            usertype:'',
            country:'',
            mobno : '',
            company:'',
            website : '',
            raddress:'',
            sques : '',
            sanswer : '',
            address : [],
            product : [],
            deliveryPincode : [],
            order : [],
            cart : [],
            wishlist : []
        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submit=(e)=>{
        e.preventDefault();
        sessionStorage.setItem("UType",this.state.usertype);
        const root = ReactDOM.createRoot(document.getElementById('root'));
            const register = {
                emailId : this.state.email,
                name : this.state.name,
                password : this.state.pwd,
                country : this.state.country,
                mobNo : this.state.mobno,
                company : this.state.company,
                websiteUrl : this.state.website,
                residenceAddress : this.state.raddress,
                userType : this.state.usertype,
                securityQuestion : this.state.sques,
                securityAnswer : this.state.sanswer,
                address : this.state.address,
                product : this.state.product,
                deliveryPincode : this.state.deliveryPincode,
                order : this.state.order,
                cart : this.state.cart,
                wishlist : this.state.wishlist
            }
            
            axios.post("http://localhost:5041/api/Authenticate/NewRegister",register).then(r => {
                if(r){
                    alert("Registration Successful");
                }
                else {
                    alert("Cannot Register");
                }
            })
      
        
       }
    isvalid=()=>{
        if((this.state.email==="") || (this.state.pwd==="") || (this.state.usertype==="") || (this.state.country==="")
        || (this.state.mobno==="") || (this.state.sques==="") || (this.state.sanswer==="")){
            return false
        }
        else{
            return true
        }
    }

    home=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home/>);
    }

    render(){
        return(
            <>
            <div className="container-fluid">

            <button onClick={this.home} class="btn btn-primary" style={{backgroundColor:"black"}}>Home</button>

            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <h3 className="container-fluid">Register</h3>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="EmailId" type={"email"} name="email" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Name" type={"text"} name="name" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Password" type={"password"} name="pwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Country" type={"text"} name="country" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Mobile Number" type={"text"} name="mobno" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Company" type={"text"} name="company" fullWidth onInput={this.Getdata}/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Website" type={"text"} name="website" fullWidth onInput={this.Getdata}/>
                    </div>
                    <br/>
                    <div className="space">
                        <label><strong> UserType:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" name="usertype" value="Customer" onChange={this.Getdata} required/> Customer &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="usertype" value="Seller" onChange={this.Getdata} required/> Seller
                    </div>
                    <br/>
                    <div className="space">
                    <TextField variant="filled" label="Residence Address" type={"text"} name="raddress" fullWidth onInput={this.Getdata} required/>
                    </div> 
                    <br/>         
                    <div className="space">
                        <FormLabel htmlFor="sques" className="labels">Select Security Question</FormLabel>&nbsp;&nbsp;
                         <Select label="Security Question" id="sques" name="sques" className="menusize" onChange={this.Getdata} required>
                             <MenuItem value="What is your Favourite Color?">What is your Favourite Color?</MenuItem>
                             <MenuItem value="What is your Hobby?">What is your Hobby?</MenuItem>
                             <MenuItem value="What is your Pet's Name?">What is your Pet's Name?</MenuItem>
                             <MenuItem value="Name of your first School?">Name of your first School?</MenuItem>
                        </Select>
                    </div>
                    <br/>
                    <div className="space">
                    <TextField variant="filled" label="Security Answer" type={"text"} name="sanswer" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <br/>
                    <div className="space">
                    <Button variant="contained" type="submit" endIcon={<LoginOutlinedIcon />}   sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                    disableRipple onClick={this.submit}> Register</Button>
                    </div>  
                </form>    
            </Box>
            </div>
            </>
        )
    }
}