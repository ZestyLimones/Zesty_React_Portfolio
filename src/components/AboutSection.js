import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import aboutImage from '../assets/images/mike.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    border: 2px solid var(--blue-1);
    border-radius: 12px;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  img {
    border-radius: 12px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="Micheal Limones"
          />
          <PText>
            Dynamic and results-driven Software Engineer with a robust
            background in full-stack JavaScript development and cloud
            infrastructure. Proficient in AWS services, with a demonstrated
            history of crafting scalable, cost-effective solutions. Recognized
            for analytical skills that led to client cost savings exceeding $15
            million, earning the Standout Performer Award in 2023. Adept in
            Agile methodologies, DevOps practices, and cloud-native development.
            Strong communicator and team collaborator, seeking a role to drive
            innovation and excellence in cloud engineering.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Projects" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={aboutImage} alt="Micheal Limones" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
