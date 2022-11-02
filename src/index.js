import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddShippingAddress from './Component/Customer/addShippingAddress';
import Register from './Component/Authenticate/Register';
import AddProduct from './Component/Seller/AddProduct';
import ShowAllProducts from './Component/Customer/ShowAllProducts';
import PlaceOrder from './Component/Customer/PlaceOrder';
import Home from './Component/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home></Home>
  </>
);

