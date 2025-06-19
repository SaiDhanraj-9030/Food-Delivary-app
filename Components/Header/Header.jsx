import React from 'react'

import './Header.css'


const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: "url('/header_img.png')" }} >
      
      <div className="header-content">
        <h2>Order your Favourite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.our mission  is to satisfy your craving and elevate your dining experience,onedelicious meal at a time</p>
        <button>view Menu</button>
      </div>
    </div>
  )
}

export default Header
