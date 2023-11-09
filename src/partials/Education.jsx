import React from 'react';
import { Link } from 'react-router-dom';
import CollegePic from '../images/educat/college.jpg';
import InstitutePic from '../images/educat/institute.jpg';

function Education() {
  return (
    <section class="education" id="education">
        <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
        <div class="box-container">
            <div class="box">
                <div class="image">
                <img draggable="false" src={InstitutePic} alt=""/>
                </div>
                <div class="content">
                <h3>BIG DATA & ANALYTICS</h3>
                <p>Specialization Program | CTIC - UNI</p>
                <h4>2023 | Completed</h4>
                </div>
            </div>

            <div class="box">
                <div class="image">
                <img draggable="false" src={CollegePic} alt=""/>
                </div>
                <div class="content">
                <h3>Mechatronics Engineering</h3>
                <p>Department of Mechanical Engineering | National University of Engineering</p>
                <h4>2016-2021 | Bachelor</h4>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Education;
