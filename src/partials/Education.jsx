import React from 'react';
import { Link } from 'react-router-dom';
import EducationComponent from '../components/EducationComponent';
import CollegePic from '../images/educat/college.jpg';
import InstitutePic from '../images/educat/institute.jpg';

function Education() {
  return (
    <section class="education" id="education">
        <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
        <div class="box-container">
        <EducationComponent />
        </div>
    </section>
  );
}

export default Education;
