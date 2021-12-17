import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Micheal Limones</span>
            </p>
            <h2 className="about__heading">Web Developer</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda soluta alias consectetur ea sit ad beatae repellendus!
                Dicta esse non natus, quasi aliquam vitae? Iste, mollitia.
                Tempora aut ea nulla?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus doloribus ratione ipsum commodi nam praesentium
                unde quis, eum, iste exercitationem consequatur reiciendis velit
                aliquid vero atque vitae veritatis aut porro!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                praesentium, nam laboriosam animi quo adipisci, ad iusto qui
                provident recusandae sint ab autem veritatis necessitatibus est
                facere! Eveniet, distinctio asperiores.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink="https://drive.google.com/file/d/1mUW2HWf5_6fNPka-4Cz8WoVEJf93_Q7B/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
