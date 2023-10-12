import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div class="container1">
        <div class="footer-content">
            <h3>Contact Us</h3>
            <p>Email:Info@example.com</p>
            <p>Phone:+121 56556 565556</p>
            <p>Address:Your Address 123 street</p>
        </div>
        <div class="footer-content">
            <h3>Quick Links</h3>
             <ul class="list">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Posts</a></li>
             </ul>
        </div>
        <div class="footer-content">
            <h3>Follow Us</h3>
            <ul class="social-icons">
             <li><a href="#" class="fa fa-facebook"></a></li>
             <li><a href="#" class="fa fa-google"></a></li>
             <li><a href="#" class="fa fa-instagram"></a></li>
             <li><a href="#" class="fa fa-youtube"></a></li>
            </ul>
            </div>
    </div>
    
</footer>
  )
}

export default Footer
