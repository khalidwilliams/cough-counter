import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DataList from '../DataList/DataList';
import QuestionWrapper from '../StyledComponents/QuestionWrapper';

const StyledComboBox = styled.input`
  width: 80%;
  height: 2em;
  background-color: #FFFFFB;
  font: 1em "Montserrat";
  box-shadow: none;
  border: 1px solid #B3B0AD;
  border-radius: 0.5em;
`;



const SelectBox = ({ options, labelText }) => {

  const [ isFocused, changeFocus ] = useState(false);
  const [ inputValue, updateValue ] = useState('');

  const datalistId = Date.now();

  const datalistRef = React.useRef(null);

  return (
    <QuestionWrapper className="question-wrapper">
      <h3 id={`datalist-${datalistId}`}>{labelText}</h3>
      <StyledComboBox 
        aria-labelledby={`datalist-${datalistId}`}
        id={`datalist-${datalistId}`} 
        role="combobox" 
        value={inputValue}
        aria-controls={datalistRef}
        aria-expanded={isFocused}
        onChange={(e) => {updateValue(e.target.value)}}
        onFocus={() => changeFocus(true)} 
        onBlur={() => changeFocus(false)}/>
      <DataList 
        aria-labelledby={`datalist-${datalistId}`}
        ref={datalistRef}
        options={options}
        id={`datalist-${datalistId}`} 
        updateValue={updateValue}
        role="listbox"
        reveal={isFocused}
        expanded={isFocused}
     />
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
