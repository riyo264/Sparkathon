// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Departments from './pages/Departments';
import Services from './pages/Services';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import InsideDepartments from './pages/InsideDepartments';
import ShopWithAI from './components/ShopWithAI';
import ProductDetails from './pages/ProductDetails'; // ✅ Product page import
import Header from './components/Header';

import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        
        {/* ✅ Product Details Page */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
