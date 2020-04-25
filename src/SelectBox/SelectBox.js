import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComboBox = styled.input`
  width: 80%;
  height: 2em;
  background-color: #FFFCF7;
  font: 1em "Montserrat";
  box-shadow: none;
  border: 1px solid #B3B0AD;
  border-radius: 0.5em;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5em;
`;

const FormLabel = styled.label`
  font: 0.9em "Nunito" ;
  font-weight: 600;
`;

const SelectBox = ({ options, labelText }) => {

  const datalistId = Date.now();

  const selectableOptions = options.map(({value, text}, i) => (
    <option value={value} key={i}>{text}</option>
  ));

  return (
    <QuestionWrapper className="question-wrapper">
      <FormLabel htmlFor={`datalist-${datalistId}`}>{labelText}</FormLabel>
      <StyledComboBox id={`datalist-${datalistId}`} role="combobox"/>
      <datalist id={`datalist-${datalistId}`}>
        {selectableOptions}
      </datalist>
    </QuestionWrapper>
  );
}

SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),
  labelId: PropTypes.string
};

export default SelectBox;
