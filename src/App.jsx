import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Nabar';
import AboutPage from './Components/Pages/AboutPage';
import Fans from './Components/Pages/Fans';
import Heaters from './Components/Pages/Heaters';
import TableFans from './Components/Pages/TableFans';
import Farata from './Components/Pages/Farata';
import Contact from './Components/Pages/Contact';
import { Download } from '@mui/icons-material';
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/company" element={<AboutPage />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/heaters" element={<Heaters />} />
        <Route path="/tableFans" element={<TableFans />} />
        <Route path="/farata" element={<Farata />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/download" element={<Download />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
