import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Impact from './pages/Impact';
import Curriculum from './pages/Curriculum';
import InTheMedia from './pages/InTheMedia';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/services' element={<Services />}> </Route>
        <Route path='/impact' element={<Impact />}> </Route>
        <Route path='/curriculum' element={<Curriculum />}> </Route>
        <Route path='/in-the-media' element={<InTheMedia />}> </Route>
        <Route path='/contact-us' element={<ContactUs />}> </Route>
        <Route path='/donate' element={<Donate />}> </Route>
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
