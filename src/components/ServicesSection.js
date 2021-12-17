import React from 'react';
import SectionTitle from './SectionTitle';
import ServiesSectionItem from './ServicesSectionItem';

export default function ServicesSection() {
  return (
    <div>
      <SectionTitle heading="Services" subheading="what I can do for you:" />
      <div className="services__allItems">
        <ServiesSectionItem />
      </div>
    </div>
  );
}
