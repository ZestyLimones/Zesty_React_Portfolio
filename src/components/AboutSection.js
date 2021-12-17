import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import aboutImage from '../assets/images/hero_img.JPEG';


export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            Full Stack web developer skilled in HTML5, CSS3, JavaScript, jQuary,
            APIs, Node.js, and GitHub. Thrives on the challenge of learning new
            technologies and the satisfaction of solving difficult problems with
            creative solutions. I’m currently enrolled in a Full Stack bootcamp
            through the University of Denver to expand my skills and move into a
            Web Developer role.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={aboutImage} alt="Micheal Limones" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
