import React from "react";import { FormLabel,Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import '../../index.css';
import axios from 'axios'
import ReactDOM from "react-dom/client";


export default class AddProduct extends React.Component{

    state = {
        file: null,
        base64URL: ""
    }

    constructor(){
        super();
        this.state={
            email:sessionStorage.getItem("email"),
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
            alert("Product Price must be greater than 0");
            return ;
        }
        if(shippCost<0 || shippCost>=500 )
        {
            alert("Shipping Cost Condition Failed!!!");
            return;
        }
        if(prodQty<1)
        {
            alert("Product Quantity must be greater 0!!!");
            return ;
        }

        const prod={
            emailId:"seller@gmail.com",
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
                alert("Product Added Successfully!!!!");
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

    render(){
        return(
            <>
            <div className="container-fluid">
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" width={"50%"} marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <h3 className="container-fluid">Add Product Page</h3>
                <form onSubmit={this.submit}>

                    <div className="space">
                        <FormLabel htmlFor="ProductType" className="labels">Select Product Type</FormLabel>
                        <Select  name="productType" className="menusize" onChange={this.Getdata} required>
                            <MenuItem value="" >Select</MenuItem>
                            <MenuItem value="Grocery">Grocery</MenuItem>
                            <MenuItem value="Mobile">Mobile</MenuItem>
                            <MenuItem value="Men's Wear">Men's Wear</MenuItem>
                            <MenuItem value="Women's Wear">Women's Wear</MenuItem>
                            <MenuItem value="Electronics">Electronics</MenuItem>
                            <MenuItem value="Furniture">Furniture</MenuItem>
                            <MenuItem value="Appliances">Appliances</MenuItem>
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