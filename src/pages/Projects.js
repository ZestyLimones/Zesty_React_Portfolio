import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';
import SectionTitle from '../components/SectionTitle';
import ProjectInfo from '../assets/data/projects';
import ContactBanner from '../components/ContactBanner';

const ProjectsStyles = styled.div`
  padding: 10rem 1rem;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export default function Projects() {
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="Here are my some projects"
        />
      </div>
      <div className="projects__allItems">
        {ProjectInfo.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
      <ContactBanner />
    </ProjectsStyles>
  );
}
