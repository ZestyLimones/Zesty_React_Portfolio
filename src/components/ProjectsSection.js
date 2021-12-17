import React from 'react';
import { Swiper } from 'swiper/react';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';

export default function ProjectsSection() {
  return (
    <div>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent work" />
        <div className="projects__allItems">
          <Swiper>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return <ProjectItem />;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
