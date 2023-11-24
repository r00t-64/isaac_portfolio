import React, { useState, useEffect } from 'react';
import SkillsCollection from '../database/skillsCollection.json';

const SkillsComponent = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Mock data directly in the component
    
    const skillsData = [
      {
        key: "analytics",
        category: "Machine Learning",
        subcategories: ["TensorFlow","Scikit-Learn", "NumPy", "Hadoop", "Spark"]
      },
      { 
        key: "software",
        category: "Software Development",
        subcategories: [  "ReactJS", "ExpressJS", "Firebase", "Python","GitHub"]
      },
      { 
        key: "cloud_computing",
        category: "Networking and Cloud Computing",
        subcategories: ["Azure", "DigitalOcean"]
      },
      { 
        key: "db_management",
        category: "Database Management",
        subcategories: [ "PostgreSQL", "MySQL" ]
      }
    ];

    setSkills(skillsData);
  }, []);

  const showSkills = () => {
    return skills.map((category, index) => (
      <div key={index}>
        <h2>{category.category}</h2>
        <div className="row" id={`skillsContainer_${category.key}`}>
          {category.subcategories.map((subCategory, subIndex) => {
            // Find the corresponding entry in SkillsCollection
            const subSkill = SkillsCollection.find((skill) => skill.name === subCategory);
  
            // Render the skill entry
            return (
              <div key={subIndex} className="bar">
                <div className="info">
                  {subSkill && (
                    <>
                      <img src={subSkill.icon} alt="skill" />
                      <span>{subSkill.name}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ));
  };

  return (
    <div>{showSkills()}</div>
  );
};

export default SkillsComponent;
