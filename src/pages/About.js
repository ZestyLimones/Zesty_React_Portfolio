import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/me.jpg';
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
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 5rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .resume {
    font-size: 2.2rem;
    background-color: var(--blue-1);
    padding: 0.7em 2em;
    border: 2px solid var(--blue-1);
    border-radius: 8px;
    color: var(--black);
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
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
                🚀 Development Enthusiast:
                <br />
                With a strong foundation in technical analytics, I specialize in
                full-stack development using technologies like React, React
                Native, Node.js, and more. My recent project, Game Stash, is a
                testament to my proficiency in mobile app development, featuring
                seamless video game collection management through AWS DynamoDB.
                <br />
                <br />
                🌐 Cloud Architect:
                <br />
                Experienced in cloud development with AWS services, I thrive at
                the intersection of software and cloud technologies. Leveraging
                AWS DynamoDB, AWS AppSync, AWS Amplify, and AWS Lambda in Game
                Stash demonstrates my commitment to creating synchronized and
                dynamic cloud-based solutions.
                <br />
                <br />
                🤖 Adaptable Problem Solver:
                <br />
                Currently serving as an Application Analyst at Capgemini, I
                spearhead technical analysis, debugging efforts, and contribute
                to architectural discussions. Recognized for identifying system
                issues, I've achieved notable client cost savings.
                <br />
                <br />
                👨‍🏫 Educator and Mentor:
                <br />
                In my role as a Full Stack Teaching Assistant at edX, I mentor
                students on front-end and back-end technologies, ensuring their
                success in the full-stack development program. Conducting
                in-depth code reviews, I provide constructive feedback to
                enhance coding applications and adherence to industry best
                practices.
                <br />
                <br />
                🔗 Let's Connect:
                <br />
                I'm passionate about driving innovation and solving complex
                challenges. If you're looking for a developer with a diverse
                skill set, adaptability, and a keen interest in cloud
                technologies, let's connect! Check out my projects, and feel
                free to reach out for collaboration or networking opportunities.
              </PText>
            </div>
            <a
              className="resume"
              href="https://drive.google.com/file/d/1I6EuGKinpzStuN8yJTh-wulhyTSQyxlK/view?usp=sharing"
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
              title="Programing Languages"
              items={['HTML5', 'CSS3', 'JavaScript (ES6)', 'Java (JDK 19)']}
            />
            <AboutInfoItem
              title="Technology Stack"
              items={[
                'React',
                'React Native',
                'Node.js',
                'Express',
                'JSON',
                'GraphQL',
                'NoSQL',
              ]}
            />
            <AboutInfoItem
              title="Cloud Technologies"
              items={['Cloud Infrastructure', 'Cloud Development']}
            />
            <AboutInfoItem
              title="Tools and Platforms"
              items={[
                'JIRA',
                'Git (GitLab, GitHub)',
                'Amazon Web Services (AWS)',
              ]}
            />
            <AboutInfoItem
              title="Methodologies & Practices"
              items={['Agile', 'Software Support', 'Test Automation', 'DevOps']}
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
              items={[
                'AI Applications and Prompt Engineering',
                'AWS Developer Associate',
                'Full Stack Web Development',
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
