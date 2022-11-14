import React from 'react';
import ReactDOM from 'react-dom/client';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import CustomerMenu from '../Customer/CustomerMenu';
import ShowAllProductsOfSeller from '../Seller/ShowAllProductsOfSeller';
import ChangePassword from './ChangePassword';
import UpdateUserDetails from './update_user';

export default class UserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            email: sessionStorage.getItem("EM")
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5041/api/Authenticate/ShowUserInfo/" + this.state.email).then(r => {
            console.log(r.data);
            this.setState({ user: r.data });

        })
    }

    back=(type)=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if(type=="Customer")
            root.render(<CustomerMenu/>);
        else{
           root.render(<ShowAllProductsOfSeller/>);
        }
    }

    changePassword=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ChangePassword/>);
    }

    updateUser=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UpdateUserDetails/>);
    }

    render() {
        return (
            <>
                <div class="container-fluid">
                    <div>
                        <h2 style={{ textAlign: "center" }} className="container-fluid p-3 mb-2 bg-dark text-white centerstyle" >Profile Details</h2>
                    </div>
                    <Paper sx={{ width: '100%' }} class="paper">
                        <TableContainer sx={{width:"80%"}}>
                            <Table stickyHeader aria-label="sticky table" class="table table-borderless table-secondary ">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}>Email ID : </TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.emailId}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}>Name :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}>Country :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.country}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}>Contact Number :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.mobNo}</TableCell>
                                    </TableRow>
                                    
                                    {this.state.user.userType=="Seller"?<>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}> Company :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.company}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}> Website URL :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.websiteUrl}</TableCell>
                                    </TableRow></>:null}
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}> Residence Address :</TableCell>
                                        <TableCell align="left" colSpan={3}>{this.state.user.residenceAddress}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right" colSpan={3}><button onClick={this.changePassword} class="btn btn-outline-info">Change Password</button> </TableCell>
                                        <TableCell align="left" colSpan={3}><button onClick={this.updateUser} class="btn btn-outline-info">Update User Details</button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6}>
                                        <button onClick={this.back.bind(this,this.state.user.userType)} class="btn btn-outline-dark" >Back</button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Paper>
                </div>
            </>
        )
    }
}
