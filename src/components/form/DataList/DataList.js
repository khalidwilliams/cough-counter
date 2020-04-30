import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDataList = styled.datalist`
  font: 1em "Montserrat";
  display: ${ props => props.reveal ? "block" : "none"};
  border: .5px solid #B3B0AD;
  border-top: none;
  width: 80%;
  & > :hover {
    background-color: #E4F0D0;
  }
`

const DataList = forwardRef((props, ref) => {
  const selectableOptions = props.options.map(({value, text}, i) => (
    <option 
      value={value} 
      key={i}
      onMouseDown={() => {
        props.updateValue(value)
      }}
      onClick={() => {
        console.log(value)
        props.updateValue(value)
      }}
    >{text}</option>
  ));
  
  return (
    <StyledDataList
    ref={ref}
    reveal={props.reveal}
    role="listbox"
    aria-expanded={props.reveal}
  >
    {selectableOptions}
  </StyledDataList>
  );
});

DataList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),
  reveal: PropTypes.bool
};

export default DataList;
