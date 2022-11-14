import React from "react";import { FormLabel,Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import '../../index.css';
import axios from 'axios'
import ReactDOM from "react-dom/client";
import Login from "../Authenticate/Login";
import AddPincode from "./AddPincode";
import ShowAllOrdersOfSeller from "./ShowAllOrdersOfSeller";
import ShowAllProductsOfSeller from "./ShowAllProductsOfSeller";
import swal from 'sweetalert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserDetails from "../Authenticate/View_User";

export default class AddProduct extends React.Component{

    state = {
        file: null,
        base64URL: ""
    }

    constructor(){
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            productType:'',
            productName:"",
            productBrand:"",
            productImage:"",
            addImage1:"",
            addImage2:"",
            productPrice:"",
            productDesc:"",
            shippingCost:"",
            productQty:""
        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();
            // Convert the file to base64 text
            reader.readAsDataURL(file);
            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                //console.log("Called", reader);
                baseURL = reader.result;
                resolve(baseURL);
                this.setState({productImage:baseURL})
                console.log(this.state.productImage);
            };
        });
    };

    handleFileInputChange = (e) => {
        let { file } = this.state;
        file = e.target.files[0];
        this.getBase64(file)
            .then(result => {
                file["base64"] = result;
                this.setState({
                    base64URL: result,
                    file
                });
            })
            .catch(err => {
                console.log(err);
            });
        this.setState({
            file: e.target.files[0]
        });
    };

    AddProduct=(e)=>{
        e.preventDefault();
        let price=this.state.productPrice;
        let shippCost=this.state.shippingCost;
        let prodQty=this.state.productQty;

        const root = ReactDOM.createRoot(document.getElementById('root'));
        if(price<1){
            swal("Failed!", "Product Price must be greater than 0", "warning");
            return ;
        }
        if(shippCost<0 || shippCost>=500 )
        {
            swal("Failed!", "Shipping Cost Condition Failed!", "warning");
            return;
        }
        if(prodQty<1)
        {
            swal("Failed!", "Product Quantity must be greater 0!", "warning");
            return ;
        }

        const prod={
            emailId:this.state.email,
            productType:this.state.productType  ,   
            productName:this.state.productName  , 
            productBrand:this.state.productBrand  ,   
            productImage:this.state.productImage   , 
            AdditonalProductImage1:"",
            AdditonalProductImage2:"",        
            productPrice:price , 
            productDescription:this.state.productDesc,    
            shippingCost:shippCost ,  
            productQuantity:prodQty
        }

        axios.post("http://localhost:5041/api/Seller/AddProduct",prod).then(r=>{
            if(r.data)
            {
                swal("Done", "Product Added Successfully", "success");
                return ;
            }
            else{
                alert("Product Addition Failed!!!!");
                return;
            }
        })
        
    }

    isvalid=()=>{
        if((this.state.productType=="") || (this.state.productName=="") || (this.state.productBrand=="") || (this.state.file=="")
        || (this.state.productPrice=="") || (this.state.productDesc=="") || (this.state.shippingCost=="") || (this.state.productQty==""))
        {
            return false
        }
        else{
            return true
        }
    }
    home=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller/>);
    }
    myproduct=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllProductsOfSeller/>);
    }

    addprod=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddProduct/>);
    }
    addpin=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AddPincode/>);
    }
    logout=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Login/>);
    }
    order=()=>
    {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ShowAllOrdersOfSeller/>);
    }
    userDetails=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<UserDetails/>);
    }

    render(){
        return(
            <>
            <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 horizontal navsize">
                            &nbsp;&nbsp;
                                <li class="fas fa-shipping-fast"><Button onClick={this.home}><strong><b>EKart Shopping</b></strong></Button></li>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                <Button variant="contained" color="primary" onClick={this.userDetails} >
                                        <div>{<AccountCircleIcon/>} </div>
                                    </Button>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.order} class="btn btn-primary btn-square">All Orders</button> </li>
                                &nbsp;
                                <li><button onClick={this.myproduct} class="btn btn-primary btn-square">My Products</button> </li>
                                &nbsp;
                                <li><button onClick={this.addprod} class="btn btn-primary btn-square">Add Product</button> </li>
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li><button onClick={this.logout} class="btn btn-danger">Logout</button> </li>

                            </ul>
                        </div>
                    </nav>

                <h3 className="container-fluid p-3 mb-2 bg-dark text-white centerstyle">Add Product</h3>
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" className="paper" marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                
                <form onSubmit={this.submit}>

                    <div className="space">
                        <FormLabel  htmlFor="ProductType" className="labels"><b>Select Product Type</b></FormLabel>
                        <Select style = {{width:"100%"}} name="productType" className="menusize" onChange={this.Getdata} required>
                            <MenuItem value="" >Select</MenuItem>
                            <MenuItem value="Grocery">Grocery</MenuItem>
                            <MenuItem value="Mobile">Mobile</MenuItem>
                            <MenuItem value="Men's Wear">Men's Wear</MenuItem>
                            <MenuItem value="Women's Wear">Women's Wear</MenuItem>
                            <MenuItem value="Electronics">Electronics</MenuItem>
                            <MenuItem value="Furniture">Furniture</MenuItem>
                            <MenuItem value="Toys">Toys</MenuItem>
                        </Select>
                    </div>
                    <br/>
                    <div className="space">
                    <TextField variant="filled" label="Product Name" type={"text"} name="productName" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="Product Brand" type={"text"} name="productBrand" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="" type={"file"} name="productImage" fullWidth onChange={this.handleFileInputChange} required/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Product Price" type={"number"} name="productPrice" placeholder="Must be > 0" fullWidth onInput={this.Getdata}/>
                    </div>
                    <div className="space">
                    <TextField variant="filled" label="Product Description" type={"text"} name="productDesc" fullWidth onInput={this.Getdata} required/>
                    </div> 
                    <div className="space">
                    <TextField variant="filled" label="Shipping Cost" type={"number"} name="shippingCost" placeholder="Between 0 to 500" fullWidth onInput={this.Getdata} required/>
                    </div> 
                    <div className="space">
                    <TextField variant="filled" label="Product Quantity" type={"number"} name="productQty"  placeholder="Must be > 0" fullWidth onInput={this.Getdata} required/>
                    </div> 
                    <br/>
                    <div className="space">
                    <Button variant="contained" type="submit"  sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                    disableRipple onClick={this.AddProduct}>Add Product</Button>
                    </div>  
                </form>    
            </Box>
            </div>
            </>
        )
    }
}