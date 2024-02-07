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
    padding: 5rem 0;
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
            desc="Unlock the power of comprehensive web development solutions with my proficiency across the entire stack. From crafting engaging user interfaces using HTML, CSS, and JavaScript to building robust backend systems with Node.js, Express, JSON, GraphQL, and NoSQL databases, I deliver end-to-end excellence in full-stack development."
          />

          <ServicesSectionItem
            icon={<AiOutlineSolution />}
            title="Analytical Problem Solving"
            desc="Navigate the complexities of software applications with my strong analytical skills. As a recognized problem solver, I specialize in spearheading technical analysis and debugging efforts. My proven ability to identify and address root causes ensures the development of software solutions that stand up to the challenges of real-world applications."
          />
          <ServicesSectionItem
            icon={<TfiThought />}
            title="Agile Software Development"
            desc="Elevate your project outcomes with my Agile mindset and collaborative approach. From seamlessly working with cross-functional teams to contributing to iterative development, I prioritize the delivery of Minimum Viable Products (MVPs) for efficient and effective project cycles. Drive your projects forward with adaptability, flexibility, and a commitment to Agile methodologies."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
