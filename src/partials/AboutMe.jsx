import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section class="about" id="about">
    <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div class="row">

    <div class="image">
        <img draggable="false" class="tilt" src="./assets/images/profile2.jpg" alt=""/>
    </div>
    <div class="content">
        <h3>I'm Isaac Alexis Rivera</h3>
        <span class="tag">Data Analyst | ML Engineer</span>
        
        <p>I am a Machine Learning Engineer based in Lima, Peru. 
        An ambitious and dedicated professional with a strong background in business and IT. My primary focus is on providing
        reliable Data Analytics services, with a focus on areas such as data exploring and predictive modeling. I am eager to
        contribute to a company's success by ensuring effective data utilization. I am enthusiastic about exploring new opportunities
        that allow me to further develop my skills in Data Analytics and Data Science as I continue to grow in my career.</p>
        
        <div class="box-container">
            <div class="box">
              <p><span> email : </span> ariveras@uni.pe</p>
              <p><span> place : </span> Lima, Peru</p>
            </div>
        </div>
        
        <div class="resumebtn">
            <a href="https://drive.google.com/file/d/13JBl2VqBc5mAkD-nIrBhvt7TecjoWrgT/view" target="_blank" class="btn"><span>Resume</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
    </section>
  );
}

export default AboutMe;
