import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/fototo-image.jpg';

export default function ProjectItem() {
  return (
    <div>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="fototo" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">Project 1</h3>
        </Link>
        <p className="projectItem__info">lorem test here about my project</p>
      </div>
    </div>
  );
}
