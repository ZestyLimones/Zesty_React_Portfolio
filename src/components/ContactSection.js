import React from 'react';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 1rem;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="Contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="(720)432-6360" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="micheal@zestylimones.com"
            />
            <ContactInfoItem icon={<MdPlace />} text="Denver, CO" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
