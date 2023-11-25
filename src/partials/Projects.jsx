import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsComponent from '../components/ProjectsComponent';

function Projects() {
  return (
    <section class="work" id="work">
      <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
      <div class="box-container">
      <ProjectsComponent />
      </div>
      <div class="viewall">
        <a href="/projects" class="btn"><span>View All</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Projects;
