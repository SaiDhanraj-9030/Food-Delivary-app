import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
<div className="footer_content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus doloremque aut ducimus laborum voluptates hic neque modi? Ab adipisci illo ratione mollitia accusantium totam quod expedita dignissimos cumque aliquam?</p>
<div className="footer-social-icons">
<img src={assets.facebook_icon} alt="" />
<img src={assets.twitter_icon} alt="" />
<img src={assets.linkedin_icon} alt="" />
</div>
</div>
<div className="footer-content-center">
    <h2>company</h2>
    <ul>
      <li>HOME</li>
      <li>about us</li>
      <li>Delivery</li>
      <li>privacy policy</li>
    </ul>
</div>
<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
  <li>+1-212-456-7890</li>
  <li>touchwithme@gmail.com</li>
</ul>
</div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 @ tomat0.com - all Right reserved.</p>



    </div>
  )
}

export default Footer
