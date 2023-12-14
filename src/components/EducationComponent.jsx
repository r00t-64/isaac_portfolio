import React, { useState, useEffect } from 'react';
import EducationCollection from '../database/educationCollection.json';


const EducationComponent = () => {
    const [education, setEducation] = useState([]);
  
    useEffect(() => {
      // Mock data directly in the component
      setEducation(EducationCollection);
    }, []);
  
    const showEducation = () => {
      return education.slice(0, 6).map((education, index) => (
        <div class="box">
            <div class="image">
            <img draggable="false" src={education.links.image} alt=""/>
            </div>
            <div class="content">
            <h3>{education.name}</h3>
            <p>{education.category}</p>
            <h4>{education.date_status}</h4>
            </div>
        </div>
      ));        
  
    };
  
    return (
      showEducation()
    );
  };
  
  export default EducationComponent;
  