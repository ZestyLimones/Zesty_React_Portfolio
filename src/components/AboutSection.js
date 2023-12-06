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
            heading="About Me"
          />
          <PText>
            As a seasoned software developer, I bring a fusion of technical
            prowess and analytical insight to every project. Proficient in a
            diverse range of web development technologies, from HTML and CSS to
            JavaScript, React, Node.js, and backend technologies such as
            Express, JSON, GraphQL, and NoSQL, I navigate the ever-evolving
            landscape of software development with agility. Well-versed in Agile
            methodologies and armed with essential tools, I have a proven track
            record of collaborating effectively, leveraging strong analytical
            skills, and making substantial contributions to architectural
            design. I'm passionate about applying my analytical expertise to
            craft innovative software solutions that not only meet but exceed
            expectations.
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
