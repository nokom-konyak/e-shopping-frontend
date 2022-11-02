import React from "react";
import { Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import ReactDOM from "react-dom/client";
import '../../index.css';
import Home from "../Home/home";
import axios from "axios";

export default class ResetPassword extends React.Component
{
    constructor()
    {
        super();
        this.state={
            ans:"",
            pwd:"",
            cpwd:"",
            email:sessionStorage.getItem("email"),
            question:sessionStorage.getItem("question")
        };
    }
    showPassword = () =>{
        this.setState(prevState => ({
            hidePassword:!prevState.hidePassword
        }));
    }

    isValid=()=>{
        if(this.state.ans===""||this.state.pwd===""||this.state.cpwd==="")
        return false;
        else
        return true;
    }
    getData=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    ResetPassword=(e)=>{
        e.preventDefault();
        const root=ReactDOM.createRoot(document.getElementById("root"));
        let em=this.state.email;
        let ans=this.state.ans;
        let pwd=this.state.pwd;
        let cpwd=this.state.cpwd;
        if(pwd!=cpwd)
        {
            alert("Password and Confirm Password Does Not Match!!!\nPlease ReEnter The Password");
            return;
        }
        axios.put("http://localhost:5041/api/Authenticate/ForgotPwd/"+em+"/"+ans+"/"+pwd).then(r=>{
            if(r.data)
            {
                alert("Password Reset Successfull!")
            }
            else{
                alert("Wrong Security Answer!!! Or Entering Your Same Old Password");
                return;
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
                <Typography variant="h4">Reset Password</Typography>
                <form onSubmit={this.ResetPassword}>
                    
                    <div className="space">
                    <TextField variant="filled" label="Email" type={"email"} name="email" fullWidth readOnly={true} value={this.state.email}/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Security Question" type={"text"} name="question" fullWidth readOnly={true} value={this.state.question}/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Security Answer" type={"text"} name="ans" fullWidth onInput={this.getData} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="New Password" type={"password"} name="pwd" fullWidth onInput={this.getData} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Confirm Password" type={"password"} name="cpwd" fullWidth onInput={this.getData} required/>
                    </div>
                    <Button type="submit" variant="contained" color="success" disabled={!this.isValid()}
                            disableRipple>Reset Password</Button>
                </form>
            </Box>
            </div>
            </>
        )
    }
}