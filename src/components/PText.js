import React from 'react';
import styled from 'styled-components';

const PStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function pText(props) {
  return (
    <PStyles>
      <p>{props.children}</p>
    </PStyles>
  );
}
