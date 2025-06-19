import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// ✅ Correct import paths and extensions
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/Placeorder/PlaceOrder";
import Footer from "./Components/Footer/Footer.jsx";
import Loginpopup from "./Components/LoginPopup/Loginpopup.jsx";

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin ={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
