import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section class="footer">
      <div class="box-container">
    
          <div class="box">
              <h3>Isaac's Portfolio</h3>
              <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
          </div>
    
          <div class="box">
              <h3>quick links</h3>
              <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
              <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
              <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
              <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
              <a href="#work"><i class="fas fa-chevron-circle-right"></i> work</a>
              <a href="#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
          </div>
    
          <div class="box">
              <h3>contact info</h3>
              <p> <i class="fas fa-phone"></i>+51 983807910</p>
              <p> <i class="fas fa-envelope"></i>ariveras@uni.pe</p>
              <p> <i class="fas fa-map-marked-alt"></i>Lima, Peru</p>
              <div class="share">
    
                  <a href="https://www.linkedin.com/in/isaac-alexis/" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
                  <a href="https://github.com/r00t-64" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
                  <a href="ariveras@uni.pe" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                  <a href="https://twitter.com/is4444c" class="fab fa-twitter" aria-label="Twitter" target="_blank"></a>
                  {/* <a href="https://t.me/lifecode5" class="fab fa-telegram-plane" aria-label="Whatsapp" target="_blank"></a> */}
              </div>
          </div>
      </div>
  
  
    </section>
  );
}

export default Footer;
