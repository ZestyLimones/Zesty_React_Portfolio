import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Micheal Limones</h1>
          <PText>
            Thow in some more text about me here for my footer, adding mre text
            to take up mre space
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol />
        </div>
        <div className="footer__col3">
          <FooterCol />
        </div>
        <div className="footer__col4">
          <FooterCol />
        </div>
      </div>
    </div>
  );
}
