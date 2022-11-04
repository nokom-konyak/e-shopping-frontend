import React from "react";
import { Button, FormControl, FormControlLabel, Input, InputLabel, MenuItem, RadioGroup, Select, Radio, FormGroup, FormLabel, TextField } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import axios from "axios";
import '../../index.css'
import UserDetails from "./View_User";
import swal from 'sweetalert';


export default class UpdateUserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            email: sessionStorage.getItem("EM"),
            tempname: '',
            country: '',
            mobNo: '',
            securityQuestion: '',
            securityAnswer: '',
        };
    }
    getData = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid = () => {
        if ((this.state.tempname === "") || (this.state.country === "") || (this.state.mobNo === "")
            || (this.state.securityQuestion === "") || (this.state.securityAnswer === "")) {
            return false;
        }
        else
            return true;
    }
    newCredentials = (e) => {
        e.preventDefault();
        const user = {
            emailId: this.state.email,
            name: this.state.tempname,
            password:"123456789",
            country: this.state.country,
            mobNo: this.state.mobNo,
            company: "",
            websiteUrl: "",
            residenceAddress: "aaaaa",
            userType: "aaaaa",
            securityQuestion: this.state.securityQuestion,
            securityAnswer: this.state.securityQuestion,
            address: [],
            product: [],
            deliveryPincode:[],
            order: [],
            cart: [],
            wishlist: []
        }
        axios.put("http://localhost:5041/api/Authenticate/UpdateUserDetails/" + this.state.email, user).then(r => {
            if (r.data) {
                swal("Congrats!", "User Details Updated Successfully", "success");
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<UserDetails />);
            }
            else {
                swal("User Details Updation Failed");
                return;
            }
        })
    }
    back=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UserDetails/>)
    }
    render() {
        return (
            <div class="container-fluid">
                <div>
                    <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >Update User Detials</h2>
                </div>
                <div >
                    <CssBaseline />
                    <Paper className="paper">
                        <Avatar>
                            <PeopleAltIcon></PeopleAltIcon>
                        </Avatar>
                        <form>
                            <div className="space">
                                <TextField variant="filled" label="Name" type={"text"} name="tempname" fullWidth onInput={this.getData} required />
                            </div>
                            <div className="space">
                                <TextField variant="filled" label="Country" type={"text"} name="country" fullWidth onInput={this.getData} required />
                            </div>
                            <div className="space">
                                <TextField variant="filled" label="Mobile Number" type={"text"} name="mobNo" fullWidth onInput={this.getData} required />
                            </div>
                            <div className="space">
                                <FormLabel htmlFor="securityQuestion" className="labels">Select Security Question</FormLabel>&nbsp;&nbsp;
                                <Select label="Security Question" id="securityQuestion" name="securityQuestion" className="menusize" onChange={this.getData} required>
                                    <MenuItem value="What is your Favourite Color?">What is your Favourite Color?</MenuItem>
                                    <MenuItem value="What is your Hobby?">What is your Hobby?</MenuItem>
                                    <MenuItem value="What is your Pet's Name?">What is your Pet's Name?</MenuItem>
                                    <MenuItem value="Name of your first School?">Name of your first School?</MenuItem>
                                </Select>
                            </div>
                            <div className="space">
                                <TextField variant="filled" label="Security Answer" type={"text"} name="securityAnswer" fullWidth onInput={this.getData} required />
                            </div>
                            <br/>
                            <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button disabled={!this.isValid()}
                                onClick={this.newCredentials}
                                className="btn btn-outline-warning">Update User Details</button>&nbsp;&nbsp;&nbsp;&nbsp;

                            <button onClick={this.back} class="btn btn-outline-dark" >Back</button>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }
}