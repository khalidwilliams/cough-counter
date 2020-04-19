import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({heading, options, changeHandler}) => {

  const initialChecks = options.filter(option => option.checked).length;
  const lessThanTwoChecked = (initialChecks < 2);


  const radioOptions = options.map((option, index) => {
    const checked = lessThanTwoChecked && option.checked ? {defaultChecked: true} : {}; 
    return  (
      <div key={index} className="radio-container">
        <label htmlFor={`${heading}-${option.label}`}>{option.label}</label>
        <input 
          type="radio" 
          name={heading} 
          id={`${heading}-${option.label}`}
          value={option.label}
          {...checked}
        />
      </div>
    )
  });

  const changeListener = (e) => {
    changeHandler(e.target.value);
  };

  return (
    <div 
      className="question-wrapper"
      onChange={(event) => {changeListener(event)}}
    >
      <h3>{heading}</h3>
      {radioOptions}
    </div>
  );
};

RadioInput.propTypes = {
  heading: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  changeHandler: PropTypes.func
}

export default RadioInput;
