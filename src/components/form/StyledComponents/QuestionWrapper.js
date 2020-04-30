import React from 'react';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5em;
  & > h3 {
    font: 1em "Nunito";
    font-weight: 800;
  }
`;

export default QuestionWrapper;
