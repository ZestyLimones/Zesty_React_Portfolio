import React from 'react';
import HeroImg from '../assets/images/hero_img.JPEG';
import Button from './Button';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello this is</span>
          <span>Micheal</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="Micheal Limones" />
        </div>
        <div className="hero__info">
          <PText>I am a web developer! Hore me and give me money!</PText>
          <Button btnLink="./projects" btnText="see my works" outline={false} />
        </div>
      </div>
    </div>
  );
}
