import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TechPage from './pages/TechPage';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InsideDepartments from './pages/InsideDepartments'; // NEW
import ShopWithAI from './components/ShopWithAI';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/departments/:category" element={<Departments />} />
        <Route path="/services/:type" element={<Services />} />
        
         
        <Route path="/inside-departments/:departmentId/:departmentName" element={<InsideDepartments />} />
        <Route path="/shop-with-ai" element={<ShopWithAI />} /> 
        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
};

export default App;
