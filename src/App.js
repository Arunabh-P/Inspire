import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
