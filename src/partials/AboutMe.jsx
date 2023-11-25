import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic2 from '../images/profile2.png';

function AboutMe() {
  return (
    <section class="about" id="about">
    <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div class="row">

    <div class="image">
        <img draggable="false" class="tilt" src={ProfilePic2} alt=""/>
    </div>
    <div class="content">
        <h3>I'm Isaac Alexis Rivera</h3>  
        <span class="tag">Man On Many Missions</span>
        
        <p>Machine Learning Engineer<br/><br/>
        Dedicated professional with a strong commitment to excellence and a passion for continuous learning. my wide IT expertise
        focuses on providing reliable data analytics services, with special emphasis on areas such as data exploration and predictive
        modeling. I am excited to contribute to the progress of your company, ensuring the effective use of data. I look forward to
        exploring new opportunities that allow me to further develop my skills in Data analysis and data science.</p>
                
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
