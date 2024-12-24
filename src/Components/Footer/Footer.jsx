import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">  
      <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>Welcome to Home Food.com ("Website"). This Website is owned and operated by Gnaneshwar.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
      </div>
      <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
      </div>
      <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 63018-57699</li>
            <li>contact:gnaneshwarrao78@gmail.com</li>
          </ul>
      </div>
     </div> 
     <hr />
     <p className="footer-copyright">Copyright 2024 Home-Food.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
