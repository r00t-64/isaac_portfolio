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
        
        <p>I am a Data Analyst based in Lima, Peru. 
        My primary focus revolves around providing high-quality data analysis services and expert guidance, specializing in areas such
        as data mining and predictive modeling. My objective is to contribute to Companies to success and ensure
        optimal data utilization. I am enthusiastic about exploring new opportunities that allow me to enhance skills in
        Data Analytics and Data Science.</p>
        
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
