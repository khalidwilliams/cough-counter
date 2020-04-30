import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../StyledComponents/FormLabel';
import QuestionWrapper from '../StyledComponents/QuestionWrapper';

const RadioInput = ({heading, name, options, changeHandler}) => {

  const initialChecks = options.filter(option => option.checked).length;
  const lessThanTwoChecked = (initialChecks < 2);


  const radioOptions = options.map((option, index) => {
    const checked = lessThanTwoChecked && option.checked ? {defaultChecked: true} : {}; 
    return  (
      <div key={index} className="radio-container">
        <FormLabel htmlFor={`${name}-${option.label}`}>{option.label}</FormLabel>
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
    <QuestionWrapper 
      onChange={(event) => {changeListener(event)}}
    >
      <h3>{heading}</h3>
      {radioOptions}
    </QuestionWrapper>
  );
};

RadioInput.propTypes = {
  heading: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  changeHandler: PropTypes.func,
  name: PropTypes.string
}

export default RadioInput;
