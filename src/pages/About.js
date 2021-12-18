import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
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
            <h2 className="about__heading">Web Developer</h2>
            <div className="about__info">
              <PText>
                Full Stack web developer skilled in HTML5, CSS3, JavaScript,
                React.js, APIs, Node.js, and GitHub. Thrives on the challenge of
                learning new technologies and the satisfaction of solving
                difficult problems with creative solutions. Received a Full
                Stack Web Developer certificate from the University of Denver
                Bootcamps. I continue to perfect my skills and expand my
                knowledge.
                <br />
                <br />
                Recently completed a group project working with two other
                individuals to create a social media application for Pets! This
                project was a lot of fun to put together. A user can upload
                pictures to their profile and can interact with other users by
                following them or adding comments to their photos.
                <br />
                <br />A background in Benefits Administration and Human
                Resources gives me a customer-focused mentality and the ability
                to keep a project aligned with the needs of the end-user. I now
                apply this process to my work as a developer by researching
                challenging issues that affect usability and accessibility and
                effectively collaborating with my team.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink={{
                pathname:
                  'https://drive.google.com/file/d/1mUW2HWf5_6fNPka-4Cz8WoVEJf93_Q7B/view?usp=sharing',
              }}
              target="_blank"
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['University of Denver Bootcamps, Denver CO']}
            />
            <AboutInfoItem
              title="School"
              items={['University of Denver Bootcamps, Denver CO']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'MongoDB']}
            />
            <AboutInfoItem
              title="Tools"
              items={['GitHub/Git', 'Microsoft Office Suites', 'Heroku']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
