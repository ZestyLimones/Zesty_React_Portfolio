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
    font-family: 'NotoSansDisplay';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo commodi alias ab unde eaque tempore consectetur esse eum vel nemo iure voluptates ullam autem possimus quidem minus fugiat numquam.',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon} </div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
