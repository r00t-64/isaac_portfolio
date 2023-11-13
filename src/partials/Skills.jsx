import React from 'react';
import { Link } from 'react-router-dom';
import SkillsComponent from '../components/SkillsComponent';

function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>
        <div className="container">
          <div className="row" id="skillsContainer">
            {/* Insert the SkillsComponent here */}
            <SkillsComponent />
          </div>
        </div>
    </section>
  );
}

export default Skills;
