import React from "react";
import {Table,Input,TableContainer,FormControl,InputLabel, TableCell,TableBody,TableRow} from "@mui/material";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import CustomerMenu from "./CustomerMenu";
export default class PlaceOrder extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            productId:sessionStorage.getItem("productId"),
            product:"",
            qty:0,
            address:"",
            TotalPrice:0
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:5041/api/Customer/GetProductById/"+this.state.productId).then(r=>{
            this.setState({product:r.data})
            console.log(this.state.product);
        })
        // axios.get("http://localhost:5041/api/Customer/ShowAllShippingAddress/"+this.state.email).then(r=>{
        //     this.setState({address:r.data});
        // })
    }

    getData=(e)=>
    {
        this.setState({[e.target.name]:e.target.value}); 
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
            productId:this.state.product.productId,
            productType:this.state.product.productType,
            productName:this.state.product.productName,
            productBrand:this.state.product.productBrand,
            productImage:this.state.product.productImage,
            productPrice:this.state.product.productPrice,
            productDescription:this.state.product.productDescription,
            shippingCost:this.state.product.shippingCost,
            quantityPurchased:this.state.qty,
            deliveryStatus:"On The Way"
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

    CustomerMenu=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerMenu/>);
    }

    render()
    {
        return(
            <>
                <div class="container-fluid">
                    <button onClick={this.CustomerMenu} class="btn btn-primary" style={{backgroundColor:"black"}}>Customer Menu</button>
                <TableContainer sx={{ maxHeight:600}} >
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
                        </TableRow>
                        <TableRow>
                            <TableCell align="center"><img src ={this.state.product.productImage} alt="Card image" width="100%" height="50%" /> </TableCell>
                            <TableCell align="center">{this.state.product.productName} </TableCell>
                            <TableCell align="center">{this.state.product.productBrand} </TableCell>
                            <TableCell align="center">{this.state.product.productType} </TableCell>
                            <TableCell align="center">Rs. {this.state.product.shippingCost} </TableCell>
                            <TableCell align="center">Rs. {this.state.product.productPrice} </TableCell>
                            <TableCell align="center">
                                <Input className="inputs" name="qty" type="number" placeholder="--Enter 1 to 10---" autoComplete="qty" disableUnderline={true} onInput={this.getData}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={7}>
                                <button class="btn btn-primary"  disabled={!this.isValid()} onClick={this.placeorder}>Buy Now</button>
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





     
    
