// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Services from './pages/Services';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';      // NEW
import OrderSuccessPage from './pages/OrderSuccessPage';  // NEW
import '@fortawesome/fontawesome-free/css/all.min.css';
import InsideDepartments from './pages/InsideDepartments'; // NEW
import ShopWithAI from './components/ShopWithAI';


const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments/:category" element={<Departments />} />
        <Route path="/services/:type" element={<Services />} />    
        <Route path="/inside-departments/:departmentId/:departmentName" element={<InsideDepartments />} />
        <Route path="/shop-with-ai" element={<ShopWithAI />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />          {/* NEW */}
        <Route path="/order-success" element={<OrderSuccessPage />} /> {/* NEW */}
        <Route path="/inside-departments/:departmentId/:departmentName" element={<InsideDepartments />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
