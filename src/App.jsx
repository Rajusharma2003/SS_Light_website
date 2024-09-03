import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Nabar';
import HomePage from './HomePage/HomePage';

// Import other components for your routes
// import AboutPage from './Components/AboutPage';
// import ProductsPage from './Components/ProductsPage';
// import FeaturesPage from './Components/FeaturesPage';
// import HowToUsePage from './Components/HowToUsePage';
// import TestimonialPage from './Components/TestimonialPage';
// import BlogPage from './Components/BlogPage';
// import NotFoundPage from './Components/NotFoundPage';
// import ContactPage from './Components/ContactPage';
// import ShopPage from './Components/ShopPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/feature" element={<FeaturesPage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* Add a catch-all route for undefined paths */}
        {/* <Route path="*" element={<NotFoundPage />} /> */} 
      </Routes>
    </Router>
  );
}

export default App;
