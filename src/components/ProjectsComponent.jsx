import React, { useState, useEffect } from 'react';
import ProjectsCollection from '../database/projectsCollection.json';

const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Mock data directly in the component
    setProjects(ProjectsCollection);
  }, []);

  const showProjects = () => {
    return projects.slice(0, 6).map((project, index) => (
      <div class="box tilt">
        <img draggable="false" src={project.links.image} alt="project" />
          <div class="content">
            <div class="tag">
            <h3>{project.name}</h3>
            </div>
            <div class="desc">
            <p>{project.desc}</p>
              <div class="btns">
                <a href={project.links.view} class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href={project.links.code} class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
      </div>
    ));        

  };

  return (
    showProjects()
  );
};

export default ProjectsComponent;
