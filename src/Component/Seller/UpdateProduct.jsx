import React from "react";import { FormLabel,Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import '../../index.css';
import axios from 'axios'
import ReactDOM from "react-dom/client";
import Login from "../Authenticate/Login";
import AddPincode from "./AddPincode";
import ShowAllOrdersOfSeller from "./ShowAllOrdersOfSeller";
import ShowAllProductsOfSeller from "./ShowAllProductsOfSeller";

export default class UpdateProduct extends React.Component{

    state = {
        file: null,
        base64URL: ""
    }

    constructor(){
        super();
        this.state={
            email:sessionStorage.getItem("EM"),
            pid:sessionStorage.getItem("PID"),
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

    UpdateP=(e)=>{
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
            alert("Shipping Cost Condition Failed!");
            return;
        }
        if(prodQty<1)
        {
            alert("Product Quantity must be greater 0!");
            return ;
        }

        const prod={
            emailId:this.state.email,
            productType:"a",   
            productName:"a", 
            productBrand:"a",   
            productImage:"a", 
            AdditonalProductImage1:"a",
            AdditonalProductImage2:"a",        
            productPrice:price , 
            productDescription:"a",    
            shippingCost:shippCost ,  
            productQuantity:prodQty
        }
        
        axios.put("http://localhost:5041/api/Seller/UpdateProduct/"+this.state.pid ,prod).then(r=>{
            if(r.data)
            {
                alert("Product Updated Successfully!");
                return ;
            }
            else{
                alert("Cannot Update Product");
                return;
            }
        })
        
    }

    isvalid=()=>{
        if((this.state.productPrice=="") || (this.state.shippingCost=="") || (this.state.productQty==""))
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
   

    render(){
        return(
            <>
            <div className="container-fluid">
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" className="paper" marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <h3 className="container-fluid">Update Product</h3>
                <form onSubmit={this.submit}>
                        
                    <div className="space">
                    <TextField variant="filled" label="Product Price" type={"number"} name="productPrice" placeholder="Must be > 0" fullWidth onInput={this.Getdata}/>
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
                    disableRipple onClick={this.UpdateP}>Update</Button> &nbsp; &nbsp; &nbsp; 
                    <button onClick={this.home} class="btn btn-outline-primary">Back</button>
                    </div>  
                </form>    
            </Box>
            </div>
            </>
        )
    }
}