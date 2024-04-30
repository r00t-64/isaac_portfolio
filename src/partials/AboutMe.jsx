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
        
        <p> Data Engineer | Data Science | Microsoft Azure <br/><br/>
        Professional specialized in data analysis, big data management, and data modeling. With 2 years of experience in the technology sector, I have focused on developing architectures in Azure, implementing ETL processes, data mining, and generating high-value indicators (KPIs). My technical stack includes Spark, Python, database management systems, Azure services, and both cloud and on-premise architectures. My aspiration is to apply my skills in the Financial Sector, where I can continue to develop and contribute value.</p>
                
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
