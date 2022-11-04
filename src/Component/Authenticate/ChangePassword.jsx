import { Button } from "@mui/material";
import React from "react";
import { Typography,TextField } from "@mui/material";
import Box from "@mui/material/Box";
import axios from 'axios';
import ReactDOM from "react-dom/client";
import Home from "../Home/home";
import swal from 'sweetalert';
import UserDetails from "./View_User";

export default class ChangePassword extends React.Component{
    constructor(){
        
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            opwd:'',
            npwd:'',
            cnpwd:'',
            user:""

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
            swal("Password Does Not Match");
        }
        else {
            this.newCredentails();
            axios.put("http://localhost:5041/api/Authenticate/UpdatePwd/" + this.state.email +
             "/" + this.state.opwd + "/" + this.state.npwd).then(r => {
                if(r.data==false)
                {
                    swal("Wrong Password",);
                    return ;
                }
                swal("Congrats!", "Password Changed Successfully", "success");
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<Home/>);
             })
        }

    }
    
    newCredentails = () => {
        let email = this.state.email;
        let oldp = this.state.opwd;
        let newp = this.state.npwd;
        let conp = this.state.cnpwd;
    };

    back=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UserDetails/>)
    }

    render(){
        return(
            <>
            <div class="container-fluid">
                    <div>
                        <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >Change Password</h2>
                    </div>
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" className="paper" marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
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
                    <Button type="submit" variant="contained" color="warning" disabled={!this.isValid()}
                            disableRipple>Update Password</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.back} class="btn btn-outline-dark" >Back</button>
                </form>
            </Box>
            </div>
            </>
        )
    }
}