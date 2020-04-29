import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DataList from '../DataList/DataList';

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

  const [ isFocused, changeFocus ] = useState(false);
  const [ inputValue, updateValue ] = useState('');

  const datalistId = Date.now();

  const datalistRef = React.useRef(null);

  const selectableOptions = options.map(({value, text}, i) => (
    <option 
      value={value} 
      key={i}
      onMouseDown={() => {
        updateValue(value)
      }}
      onClick={() => {
        console.log(value)
        updateValue(value)
      }}
    >{text}</option>
  ));

  return (
    <QuestionWrapper className="question-wrapper">
      <FormLabel htmlFor={`datalist-${datalistId}`}>{labelText}</FormLabel>
      <StyledComboBox 
        id={`datalist-${datalistId}`} 
        role="combobox" 
        value={inputValue}
        aria-controls={datalistRef}
        onClick={() => {console.log(this)}}
        onChange={(e) => {updateValue(e.target.value)}}
        onFocus={() => changeFocus(true)} 
        onBlur={() => changeFocus(false)}/>
      <DataList 
        ref={datalistRef}
        options={options}
        id={`datalist-${datalistId}`} 
        updateValue={updateValue}
        role="listbox"
        reveal={isFocused}
        aria-expanded={isFocused}
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
