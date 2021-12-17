import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/hero_img.JPEG';
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
      border: 2px solid var(--gray-1);
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda soluta alias consectetur ea sit ad beatae repellendus!
                Dicta esse non natus, quasi aliquam vitae? Iste, mollitia.
                Tempora aut ea nulla?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus doloribus ratione ipsum commodi nam praesentium
                unde quis, eum, iste exercitationem consequatur reiciendis velit
                aliquid vero atque vitae veritatis aut porro!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                praesentium, nam laboriosam animi quo adipisci, ad iusto qui
                provident recusandae sint ab autem veritatis necessitatibus est
                facere! Eveniet, distinctio asperiores.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink="https://drive.google.com/file/d/1mUW2HWf5_6fNPka-4Cz8WoVEJf93_Q7B/view?usp=sharing"
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
