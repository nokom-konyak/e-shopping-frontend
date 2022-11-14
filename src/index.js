import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Component/Home/home';
import Footer from './Component/Home/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home></Home>
  </>
);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <>
  <Footer/>
  </>
);
