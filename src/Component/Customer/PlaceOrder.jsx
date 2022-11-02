import React from "react";
import {Table,Input,TableContainer,FormControl,InputLabel, TableCell,TableBody,TableRow} from "@mui/material";
import axios from "axios";
import ReactDOM from 'react-dom/client';
export default class PlaceOrder extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:sessionStorage.getItem("email"),
            productId:sessionStorage.getItem("productId"),
            product:"",
            qty:"",
            TotalPrice:0,
            address:""
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Customer/GetProductById/"+this.state.productId).then(r=>{
            this.setState({product:r.data})
            console.log(this.state.product);
        })
        axios.get("http://localhost:5041/api/Customer/ShowAllShippingAddress/")
    }

    getData=(e)=>
    {
        this.setState({[e.target.name]:e.target.value}); 
    }

    calculatePrice=()=>{
        let totalPrice=this.state.qty*this.state.product.productPrice;
        this.setState({TotalPrice:totalPrice})
        document.getElementsByName("amount")[0].value=this.state.TotalPrice;
    }

    

    isValid=(e)=>{
        if(this.state.qty=="")
            return false;
        return true;
    }

    placeorder=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if(this.state.qty<1)
        {
            alert("Quantity Cannot be less than 1!!!");
            return ;
        }
        if(this.state.qty>10)
        {
            alert("Quantity must be between 1 to 10!!!!");
            return ;
        }
        if(this.state.qty>this.state.product.productQuantity)
        {
            alert("Ordered Quantity Not Available!!!");
            return ;
        }

        const o={
            emailId:this.state.email,
            sellerEmailId:this.state.product.emailId,
            productType:this.state.product.productType,
            productName:this.state.product.productName,
            productBrand:this.state.product.productBrand,
            productPrice:this.state.product.productPrice,
            productDescription:this.state.product.productDescription,
            shippingCost:this.state.product.shippingCost,
            quantityPurchased:this.state.qty
        }
        console.log(o);
        axios.post("http://localhost:5041/api/Customer/AddOrder",o).then(r=>{
            if(r.data)
            {
                alert("Order Placed Successfully!!!");
                //root.render(<ShowAllOrder/>)
            }
            else{
                alert("Server Error!!!");
            }

            
        })

    }

    render()
    {
        return(
            <>
                <div class="container-fluid">
                <TableContainer sx={{ maxHeight:500}} >
                    <Table stickyHeader aria-label="sticky table" >
                    <TableBody>
                        <TableRow>
                            <TableCell align="center"><b>Product Image</b></TableCell>
                            <TableCell align="center"><b>Product Name</b></TableCell>      
                            <TableCell align="center"><b>Product Brand</b></TableCell>      
                            <TableCell align="center"><b>Product Type</b></TableCell>      
                            <TableCell align="center"><b>Shipping Cost</b></TableCell>      
                            <TableCell align="center"><b>Product Price</b></TableCell>      
                            <TableCell align="center"><b>Enter Quantity</b></TableCell>
                            <TableCell align="center"><b>Total Price</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center"><img src ={this.state.product.productImage} alt="Card image" width="100%" height="50%" /> </TableCell>
                            <TableCell align="center">{this.state.product.productName} </TableCell>
                            <TableCell align="center">{this.state.product.productBrand} </TableCell>
                            <TableCell align="center">{this.state.product.productType} </TableCell>
                            <TableCell align="center">Rs. {this.state.product.shippingCost} </TableCell>
                            <TableCell align="center">Rs. {this.state.product.productPrice} </TableCell>
                            <TableCell align="center">
                                <Input className="inputs" name="qty" type="number" placeholder="1 to 10" autoComplete="qty" disableUnderline={true} onChange={this.calculatePrice} onInput={this.getData}/>
                            </TableCell>
                            <TableCell align="center"><Input name="amount" onChange={this.getData} disableUnderline={true} readOnly={true} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>Select Shipping Address</TableCell>

                            <TableCell align="center" colSpan={4}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={7}>
                                <button class="btn btn-primary" disabled={!this.isValid()} onClick={this.placeorder}>Buy Now</button>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                    </Table>
                </TableContainer>
                </div> 
            </>
        )
    }
}





     
    
