import React, { useState } from 'react';
import Modal from '../utils/Modal';

import IntoSkillsComponent from '../components/IntoSkillsComponent';
import ParticlesComponent from '../components/ParticlesComponent';

import HeroPic from '../images/hero.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section class="home" id="home">
      <ParticlesComponent />
      <div class="content">
        <h2>Hi There,<br /> I'm Isaac <span>Rivera</span></h2>
        <p>I Am Into <IntoSkillsComponent /> </p>
        <a href="#about" class="btn"><span>About Me</span>
          <i class="fas fa-arrow-circle-down"></i>
        </a>
        <div class="socials">
          <ul class="social-icons">
            <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/isaac-alexis/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a class="github" aria-label="GitHub" href="https://github.com/r00t-64" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a class="twitter" aria-label="Twitter" href="https://twitter.com/is4444c" target="_blank"><i class="fab fa-twitter"></i></a></li>
            {/* <li><a class="telegram" aria-label="Telegram" href="https://t.me/lifecode5" target="_blank"><i class="fab fa-telegram-plane"></i></a></li> */}
            <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/isaac_alexis44"><i class="fab fa-instagram" target="_blank"></i></a></li>
            {/*  <li><a class="dev" aria-label="Dev" href="https://dev.to/jigarsable" target="_blank"><i class="fab fa-dev"></i></a></li>  */}
          </ul>
        </div>
      </div>
      <div class="image">
        <img draggable="false" class="tilt" src={HeroPic} alt="" />
      </div>
    </section>

  );
}

export default HeroHome;
