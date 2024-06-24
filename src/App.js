import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//In react-router-dom v6
import './App.css';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
// import SignUp from './components/pages/SignUP.js';
import Contact from './components/pages/Contact.jsx';
// import Cart from './components/pages/Cart.js';
import Productslist from './components/pages/Productlist.js';
import Locate from './components/pages/Locate.js';
import Story from './components/TheStory.js';
import LineSocial from './components/LineSocial.js';
import CartonIntro from './components/CartonIntro.js';
// import GPTProductDetail from './components/GPTproductdetail.jsx';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/services' exact element={<Services/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='/productlist' exact element={<Productslist/>}/>
          <Route path='/locate' extra element={<Locate/>}/>
          <Route path='/story' extra element={<Story/>}/>
          <Route path='/linesocial' extra element={<LineSocial/>}/>
          <Route path='/cartonintro' extra element={<CartonIntro/>}/>
          {/* <Route path='/cart' exact element={<Cart/>}/> */}
          {/* <Route path='/sign-up' exact element={<SignUp/>}/> */}
          {/* <Route path='/GPTproductdetail/:id' element={<GPTProductDetail/>}/> */}
        </Routes>
      </Router>
    </>
  );
}
//BrowserRouter>Routes>Route
export default App;
