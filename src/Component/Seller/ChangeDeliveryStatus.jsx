import React from "react";
import {Table,Input,TableContainer,FormControl,InputLabel, Box, FormLabel, MenuItem, Select, TableCell,TableBody,TableRow, Button} from "@mui/material";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import ShowAllProductsOfSeller from "./ShowAllProductsOfSeller";
import ShowAllOrdersOfSeller from "./ShowAllOrdersOfSeller";
export default class ChangeDeliveryStatus extends React.Component
{
    constructor()
    {
        super();
        this.state={
            oid:sessionStorage.getItem("OId"),
            delstatus:'',
            order:[],
            oldstatus:''
        }
    }
    getData=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Seller/ShowOrderById/"+this.state.oid).then(r=>{
            this.setState({order:r.data})
            console.log(this.state.order);
        })
    }
    UpdateStatus=(e)=>{
        
        e.preventDefault();
        axios.put("http://localhost:5041/api/Seller/UpdateDeliveryStatus/"+this.state.oid+"/"+this.state.delstatus).then(r=>{
            const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ChangeDeliveryStatus/>);
        })
    }
    myorder=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrdersOfSeller/>);
    }
    isValid = () =>{
        if((this.state.order.deliveryStatus == "On The Way" && this.state.delstatus == "Delivered") || 
        (this.state.order.deliveryStatus == "Request For Cancellation" && this.state.delstatus == "Cancelled")
        || (this.state.order.deliveryStatus == "Request For Return" && this.state.delstatus == "Returned")) 
            return true;
        else
            return false;
    }
    render()
    {
        return(
            <>
            <div className="container-fluid">
            <h2 class="p-3 mb-2 bg-dark text-white centerstyle"  >Update Delivery Status</h2>
                <div class="container-fluid">
                    <div class="imgsty">
                        <img src ={this.state.order.productImage} alt="Card image" width="30%" height="30%" />
                    </div>
                    <br/>
                    <br/>
                <TableContainer sx={{width:"80%"}}   >
                    <Table stickyHeader aria-label="sticky table" class="table table-borderless " >
                    <TableBody>    
                        <TableRow >
                            <TableCell align="right"><b>Product Name :</b></TableCell>  
                            <TableCell align="left">{this.state.order.productName} </TableCell>
                        </TableRow>        
                        <TableRow >
                            <TableCell align="right"><b>Product Price :</b></TableCell>  
                            <TableCell align="left">₹ {this.state.order.productPrice} </TableCell>
                        </TableRow>    
                        <TableRow>       
                            <TableCell align="right"><b>Quantity Purchased :</b></TableCell>
                            <TableCell align="left">{this.state.order.quantityPurchased} </TableCell>
                        </TableRow>    
                        <TableRow>    
                            <TableCell align="right"><b>Total Price :</b></TableCell>
                            <TableCell align="left">₹ {this.state.order.totalPrice} </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell align="right"><b>Delivery Status :</b></TableCell>
                            <TableCell align="left">{this.state.order.deliveryStatus} </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
                </div> 
                <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" className="paper" marginTop={6}  padding={5}>
                <form onSubmit={this.submit}>

                    <div className="space">
                        <FormLabel htmlFor="DeliveryStatus" className="labels">Update Delivery Status</FormLabel>
                        <Select  name="delstatus" className="menusize" onChange={this.getData} required>
                            <MenuItem value="" >Select</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                            <MenuItem value="Returned">Returned</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                    </div>
                    <br/>
                    <div className="space">
                    <Button variant="contained" type="submit" disabled={!this.isValid()}
                    disableRipple onClick={this.UpdateStatus}>Update</Button>
                    &nbsp; &nbsp; &nbsp; 
                    <button onClick={this.myorder} class="btn btn-outline-primary">Back</button>
                    </div>  
                </form>    
            </Box>
            </div>    
            </>
        )
    }
}