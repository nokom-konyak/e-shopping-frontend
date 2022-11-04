import { Typography, TextField, requirePropFactory } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ReactDOM from "react-dom/client";
import axios from "axios";
import ForgotPassword from "./ForgotPassword";
import Register from './Register';
import Home from "../Home/home";
import CustomerMenu from "../Customer/CustomerMenu";
import ShowAllProductsOfSeller from "../Seller/ShowAllProductsOfSeller";
import swal from 'sweetalert';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pwd: '',
        }
    }
    Getdata = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    ForgotPwd = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ForgotPassword />);
    }
    RegisterUser = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Register />);
    }
    submit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("EM", this.state.email);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        axios.get("http://localhost:5041/api/Authenticate/Login/" + this.state.email + "/" + this.state.pwd).then(r => {
            console.log(r.data);
            if (r.data == "Customer") {
                root.render(<CustomerMenu />)
            }
            else if (r.data == "Seller") {
                root.render(<ShowAllProductsOfSeller />);
            }
            else {
                swal("Invalid Credentials", "Wrong Email Id Or Password", "warning");
                return;
            }
        })

    }
    isvalid = () => {
        if ((this.state.email === "") || (this.state.pwd === "")) {
            return false
        }
        else {
            return true
        }
    }

    home = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />);
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div>
                        <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >Login</h2>
                    </div>

                    <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" className="paper" marginTop={6} padding={5} sx={{
                        ":hover": {

                            boxShadow: "6px 6px 12px red",
                        }
                    }}>

                        <form onSubmit={this.submit}>

                            <div className="space">
                                <TextField variant="filled" label="Email Id" type={"email"} name="email" fullWidth onInput={this.Getdata} required />
                            </div>
                            <div className="space" >
                                <TextField variant="filled" label="Password" type={"password"} name="pwd" fullWidth onInput={this.Getdata} required />
                            </div>
                            <button class="btn btn-outline-dark" onClick={this.ForgotPwd}>Forgot Password?</button> <br />

                            <div className="space">
                                <Button variant="contained" type="submit" endIcon={<LoginOutlinedIcon />} color="warning" sx={{ ":hover": { backgroundColor: "green" } }} disabled={!this.isvalid()}
                                    disableRipple onClick={this.submit}>Login</Button> &nbsp; &nbsp; &nbsp; &nbsp;
                                <button class="btn btn-outline-dark" onClick={this.RegisterUser}>Register</button> <br />

                            </div>
                        </form>

                        <button onClick={this.home} class="btn btn-primary" style={{ backgroundColor: "black" }}>Back</button>
                    </Box>
                </div>
            </>
        )
    }
}