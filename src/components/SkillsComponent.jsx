import React, { useState, useEffect } from 'react';

const SkillsComponent = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Mock data directly in the component
    const skillsData = [
      { name: 'ReactJS', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
      { name: 'ExpressJS', icon: 'https://img.icons8.com/fluency/48/000000/node-js.png' },
      // Add more skills as needed
    ];

    setSkills(skillsData);
  }, []);

  const showSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="bar">
        <div className="info">
          <img src={skill.icon} alt="skill" />
          <span>{skill.name}</span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Skills</h2>
      <div id="skillsContainer">{showSkills()}</div>
    </div>
  );
};

export default SkillsComponent;
