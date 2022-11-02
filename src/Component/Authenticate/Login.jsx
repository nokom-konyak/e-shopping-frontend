import { Typography,TextField, requirePropFactory } from "@mui/material";
import React from "react";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import LoginOutlinedIcon  from "@mui/icons-material/LoginOutlined";
import ReactDOM from "react-dom/client";
import axios from "axios";
import ForgotPassword from "./ForgotPassword";
import Register from './Register';
import Home from "../Home/home";
const root = ReactDOM.createRoot(document.getElementById('root'));

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pwd:'',

        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    ForgotPwd=()=>
    {
        root.render(<ForgotPassword/>);
    }
    RegisterUser=()=>
    {
        root.render(<Register/>);
    }
    submit=(e)=>{   
        e.preventDefault();
        sessionStorage.setItem("EM",this.state.email);
        axios.get("http://localhost:5041/api/Authenticate/Login/" + this.state.email + "/" + this.state.pwd).then( r=> {
            console.log(r.data);
            if(r.data == "Customer"){
               // root.render(<CustomerMenu/>)
                alert("Customer Login")
            }else if(r.data == "Seller"){
                alert("Seller Login");
               // root.render(<AdminMenu/>);
            }
            else{
                alert("Invalid Credentials");
            }
        })
    
       }
    isvalid=()=>{
        if((this.state.email==="") || (this.state.pwd==="")){
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

            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto"  marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <Typography variant="h2">Login</Typography>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="Email Id" type={"email"} name="email" fullWidth onInput={this.Getdata} required/>
                    </div>      
                    <div className="space" >
                    <TextField variant="filled" label="Password" type={"password"} name="pwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <button  class="btn btn-outline-dark" onClick={this.ForgotPwd}>Forgot Password?</button> <br/>
                    
                    <div className="space">
                    <Button variant="contained" type="submit" endIcon={<LoginOutlinedIcon />}  color="warning" sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                    disableRipple onClick={this.submit}>Login</Button> &nbsp; &nbsp; &nbsp; &nbsp;
                      <button  class="btn btn-dark" onClick={this.RegisterUser}>Register</button> <br/>
                    
                    </div>
                </form>
            </Box>
            </div>
            </>
        )
    }
}