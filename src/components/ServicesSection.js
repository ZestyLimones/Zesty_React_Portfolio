import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPerson } from 'react-icons/md';
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
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do UI/UX design to help websites stand out!"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I create high performaning websites."
          />
          <ServicesSectionItem
            icon={<MdPerson />}
            title="Client Support"
            desc="Great at working with clients to understand their needs."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
