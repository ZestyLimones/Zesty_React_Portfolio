import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Micheal Limones</h1>
          <PText>
            When I’m not coding, you can usually find me on the trails preparing
            for my next charity bike ride event. Feel free to ask me about The
            Empire State Ride. 😊 🚴
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'micheal@zestylimones.com',
                path: 'mailto:micheal@zestylimones.com',
              },
              {
                title: '(872) 221-4659',
                path: 'tel:+18722214659',
              },
              {
                title: 'Chicago, IL',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'GitHub',
                path: 'https://github.com/ZestyLimones',
              },
              {
                title: 'LinkedIn',
                path: 'https://github.com/ZestyLimones',
              },
              {
                title: 'Instagram',
                path: 'https://github.com/ZestyLimones',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyles>
  );
}
