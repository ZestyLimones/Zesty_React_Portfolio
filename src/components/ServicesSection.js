import React from 'react';
import styled from 'styled-components';
import { AiOutlineSolution } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { TfiThought } from 'react-icons/tfi';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I can do for you:" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaLaptopCode />}
            title="Full-Stack Expertise"
            desc="Leverage my proficiency in a broad spectrum of web development technologies, encompassing both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, JSON, GraphQL, NoSQL). Provide end-to-end solutions with a comprehensive understanding of the entire development stack."
          />

          <ServicesSectionItem
            icon={<AiOutlineSolution />}
            title="Analytical Problem Solving"
            desc="Apply strong analytical skills to identify and resolve complex issues in software applications. Recognized for spearheading technical analysis and debugging efforts, I thrive on tackling challenges and have a proven ability to discover root causes of system issues. This analytical approach extends to contributing substantially to architectural design, ensuring robust and scalable solutions."
          />
          <ServicesSectionItem
            icon={<TfiThought />}
            title="Agile Software Development"
            desc="Drive projects with an Agile mindset, ensuring flexibility, adaptability, and rapid delivery. Well-versed in Agile methodologies, I collaborate seamlessly with cross-functional teams, contribute to iterative development, and prioritize delivering Minimum Viable Products (MVPs) for efficient and effective project outcomes."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
