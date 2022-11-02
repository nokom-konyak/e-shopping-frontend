import React from "react";
import { Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import ReactDOM from "react-dom/client";
import '../../index.css'
import axios from "axios";
import Home from "../Home/home";
import ResetPassword from "./ResetPassword";
 
export default class ForgotPassword extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:""
        };
    }
    isValid=()=>{
        if(this.state.email=="")
        return false;
        else
        return true;
    }
    getData=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    ForgotPassword=(e)=>{
        e.preventDefault();
        const root=ReactDOM.createRoot(document.getElementById("root"));
        let em=this.state.email;
        axios.get("http://localhost:5041/api/Authenticate/GetSecurityQuestion/"+em).then(r=>{
            if(r.data!="")
            {
                sessionStorage.setItem("question",r.data);
                sessionStorage.setItem("email",em);
                root.render(<ResetPassword/>)
            }
            else{
                alert("No Record Found for Email Id : "+em);
                
            }
        })
    }

    home=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home/>);
    }
    render()
    {
        return(
            <>
            <div className="container-fluid">
                <button onClick={this.home} class="btn btn-primary" style={{backgroundColor:"black"}}>Home</button>

            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <Typography variant="h3">Forgot Password</Typography>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="EmailId" type={"email"} name="email" fullWidth onInput={this.getData} required/>
                    </div>
                    <div className="space">
                    <Button disabled={!this.isValid()}
                    disableRipple
                    fullWidth
                    variant="text"
                    type="submit"
                    onClick={this.ForgotPassword} className="btn">Continue to Reset Password</Button>
                    </div>  
                </form>    
            </Box>
            </div>
            </>
        )
    }
}