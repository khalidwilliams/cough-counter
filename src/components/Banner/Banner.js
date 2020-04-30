import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #c2d8b9;
  & h1 {
    margin: 0;
    padding: 1em;
    font-family: 'Montserrat';
  }
`;

const Banner = () => {
  return (
    <StyledHeader>
      <h1>Cough Counter</h1>
    </StyledHeader>
  );
};

export default Banner;
