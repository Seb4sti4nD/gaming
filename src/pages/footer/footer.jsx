import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export function Footer() {
  return (
    
  <footer class="footer">
  <div class="container">
      <div class="row">
          <div class="footer-col">
              <h4>GameTech Store</h4>
              <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">affiliate program</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>get help</h4>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">shipping</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">payment options</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                  <li><a href="#">Impresoras</a></li>
                  <li><a href="#">Monitores</a></li>
                  <li><a href="#">Auriculares</a></li>
                  <li><a href="#">Procesadores</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
              <Link className='link' to='https://www.instagram.com/empresa.com1225/profilecard/?igsh=ZGt3ZWM4cndkbmty'><i class="fa-brands fa-instagram"></i></Link>
              </div>
          </div>
      </div>
  </div>
</footer>

  )
} 
