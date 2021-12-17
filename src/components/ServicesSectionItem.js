import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';

export default function ServiesSectionItem() {
  return (
    <div>
      <div className="servicesItem__icon">
        <MdDesktopMac />
        <div className="servicesItem__title">Web Design</div>
        <PText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo
          commodi, alias ab unde eaque tempore consectetur esse eum vel nemo
          iure voluptates ullam autem possimus quidem minus fugiat numquam.
        </PText>
      </div>
    </div>
  );
}
