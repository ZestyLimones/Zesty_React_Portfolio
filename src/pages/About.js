import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/mike.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--blue-1);
      border-radius: 12px;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    text-shadow: 1px 1px var(--white);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    text-shadow: 1px 1px var(--white);
  }
  .resume {
    font-size: 2.2rem;
    background-color: var(--blue-1);
    padding: 0.7em 2em;
    border: 2px solid var(--blue-1);
    border-radius: 8px;
    box-shadow: 2px 2px var(--white);
    color: var(--black);
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .resume {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Micheal Limones</span>
            </p>
            <h2 className="about__heading">Software Developer</h2>
            <div className="about__info">
              <PText>
                Experienced software developer with a solid background in
                technical and application analytics. Proficient across a
                spectrum of web development technologies, including HTML, CSS,
                JavaScript, React, Node.js, and backend technologies such as
                Express, JSON, GraphQL, and NoSQL. My expertise extends to Agile
                methodologies and essential software development tools. With a
                proven ability to collaborate effectively and leverage strong
                analytical skills, I contribute substantially to architectural
                design.
                <br />
                <br />
                In my current role as an Application Analyst at Capgemini, I
                spearhead technical analysis and debugging efforts,
                collaborating with cross-functional teams to devise effective
                resolutions. I received the Standout Performer Award in 2023 for
                identifying root causes of system issues, saving the client over
                $15 million.
                <br />
                <br />
                My proactive approach extends to my role as a Full Stack
                Teaching Assistant at edX, where I assist the course instructor
                in mentoring students on front-end and back-end technologies.
                Through in-depth code reviews, I provide constructive feedback
                to improve coding practices and adhere to industry best
                practices in software development.
              </PText>
            </div>
            <a
              className="resume"
              href="https://drive.google.com/file/d/1tKyksptzgdzLeV_mbuzbz_xfxPV45smN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'jQuery', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'NoSQL', 'Java', 'MongoDB']}
            />
            <AboutInfoItem
              title="Tools"
              items={['JIRA', 'Git', 'GitLab', 'GitHub', 'AWS', 'Heroku']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['University of Denver Bootcamps, Denver CO']}
            />
            <AboutInfoItem
              title="Certifications"
              items={['AWS Developer Associate', 'Full Stack Web Development']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
