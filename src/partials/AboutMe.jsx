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
        
        <p> Credit Risk | Data Science | Azure <br/><br/>
        Professional commited to data science and data engineering, with 3 years of experience on Information technology sector. I have worked on generating key performance indicators (KPIs) and developing architectures both in the cloud and on-premise. My technical stack includes Spark, Python, SQL, and Azure services. Currently, I am working in the Credit Risk area, focusing on financial risk management. My goal is to apply and expand my skills within the Financial Sector.
        </p>
                
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
