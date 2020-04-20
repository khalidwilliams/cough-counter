import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({heading, name, options, changeHandler}) => {

  const initialChecks = options.filter(option => option.checked).length;
  const lessThanTwoChecked = (initialChecks < 2);


  const radioOptions = options.map((option, index) => {
    const checked = lessThanTwoChecked && option.checked ? {defaultChecked: true} : {}; 
    return  (
      <div key={index} className="radio-container">
        <label htmlFor={`${name}-${option.label}`}>{option.label}</label>
        <input 
          type="radio" 
          name={name} 
          id={`${name}-${option.label}`}
          value={option.label}
          {...checked}
        />
      </div>
    )
  });

  const changeListener = (e) => {
    changeHandler(e.target.value, e.target.name);
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
  changeHandler: PropTypes.func,
  name: PropTypes.string
}

export default RadioInput;
