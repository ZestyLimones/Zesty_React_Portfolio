import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/fototo-image.jpg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--blue-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    text-align: center;
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'here is a description for this specific project.',
  link = 'https://github.com/ZestyLimones',
}) {
  return (
    <ProjectItemStyles>
      <Link
        to={{ pathname: link }}
        target="_blank"
        className="projectItem__img"
      >
        <img src={img} alt="fototo" />
      </Link>
      <div className="projectItem__info">
        <Link to={{ pathname: link }} target="_blank">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
        </Link>
      </div>
    </ProjectItemStyles>
  );
}
