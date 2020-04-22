import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = ({ options, labelText }) => {

  const datalistId = Date.now();

  const selectableOptions = options.map(({value, text}, i) => (
    <option value={value} key={i}>{text}</option>
  ));

  return (
    <div className="question-wrapper">
      <label htmlFor={`datalist-${datalistId}`}>{labelText}</label>
      <input id={`datalist-${datalistId}`} role="combobox"/>
      <datalist id={`datalist-${datalistId}`}>
        {selectableOptions}
      </datalist>
    </div>
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
