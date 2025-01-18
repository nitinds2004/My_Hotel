import React, { useState } from 'react';
import Navbar from './commponent/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from './commponent/Footer/Footer';
import Loginpopup from './commponent/Loginpopup/Loginpopup';

const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
   <>
   {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
   <div className='app'>
   <Navbar setshowLogin={setshowLogin}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<Placeorder/>}/>
    
  </Routes>
  </div>
  <Footer/>
   </>
  );
}

export default App;
