import { Button } from "@mui/material";
import React from "react";
import { Typography,TextField } from "@mui/material";
import Box from "@mui/material/Box";
import axios from 'axios';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
export default class ChangePassword extends React.Component{
    constructor(){
        
        super();
        this.state={
            email: "sachin@gmail.com",
            opwd:'',
            npwd:'',
            cnpwd:''

        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    passwordMatch = () => this.state.npwd === this.state.cnpwd;
    isValid = () => {
        if ((this.state.email === "") || (this.state.opwd === "") || (this.state.npwd === "") || (this.state.cnpwd === ""))

            return false;
        else
            return true;
    }

    submit=(e)=>{
        e.preventDefault();
        if (!this.passwordMatch()) {
            alert("Password Does Not Match");
        }
        else {
            this.newCredentails();
            axios.put("http://localhost:5041/api/Authenticate/UpdatePwd/" + this.state.email +
             "/" + this.state.opwd + "/" + this.state.npwd).then(r => {
                if(r){
                    alert("Password Updated:)");
                }else{
                    alert("Password Not Updated");
                }
             })
        }

    }
    
    newCredentails = () => {
        let email = this.state.email;
        let oldp = this.state.opwd;
        let newp = this.state.npwd;
        let conp = this.state.cnpwd;
    };
    render(){
        return(
            <>
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" width={"40%"} marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <Typography variant="h4">Update password</Typography>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="Email" type={"email"} name="email" fullWidth readOnly={true} value={this.state.email}/>
                    </div>
                    
                    
                    <div className="space" >
                    <TextField variant="filled" label="Old Password" type={"password"} name="opwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="New Password" type={"password"} name="npwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Confirm Password" type={"password"} name="cnpwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <Button type="submit" variant="contained" color="success" disabled={!this.isValid()}
                            disableRipple>Update Password</Button>
                </form>
            </Box>

            </>
        )
    }
}