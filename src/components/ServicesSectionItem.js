import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiesSectionItem() {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        <MdDesktopMac />
        <div className="servicesItem__title">Web Design</div>
        <PText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo
          commodi, alias ab unde eaque tempore consectetur esse eum vel nemo
          iure voluptates ullam autem possimus quidem minus fugiat numquam.
        </PText>
      </div>
    </ItemStyles>
  );
}
