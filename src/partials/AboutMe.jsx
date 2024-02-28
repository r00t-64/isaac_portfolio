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
        Professional specialized in data analysis, big data management and data modeling, 
        my experience in the technology sector focuses on the development of architectures in Azure, the implementation of ETL processes, 
        data mining and the generation of high-value indicators . (KPIs). 
        I am committed to continuous improvement and stay up to date with market trends in Data Analytics and Data Science, 
        constantly seeking to update my skills and knowledge to stay abreast of the latest technological innovations.</p>
                
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
