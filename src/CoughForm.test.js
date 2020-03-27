import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoughForm from './CoughForm';

describe('CoughForm', () => {
  
  test('should render a form on the page', () => {
    const { queryByRole, getByText, getByRole, debug } = render(<CoughForm/>);
    expect(queryByRole('form')).toBeInTheDocument();
    expect(getByText('New Cough')).toBeInTheDocument();
    expect(getByRole('radio', {name: 'Yes'})).toBeInTheDocument();
    expect(getByRole('radio', {name: 'No'})).toBeInTheDocument();
    expect(getByRole('radio', {name: 'Indoor'})).toBeInTheDocument();
    expect(getByRole('radio', {name: 'Outdoor'})).toBeInTheDocument();
    expect(getByRole('button', {name:'Add Cough'})).toBeInTheDocument();
  });

  test('should render a pre-filled form when appropriate', () => {
  // if props are passed in to the CoughForm, the most recent repsonses should populate
    const { queryByRole, getByText, getByRole, debug } = render(<CoughForm
         
      />);
  });

  describe('"productive" input', () => {
    test('should update values in state on change', () => {
      // When Productive Changes, its state will reflect the change 
    });

    test('should reveal mucus option if affirmed', () => {
      // When productive gets value 'yes', the mucus field will appear on the page
    });

    test('"mucus" input should not render if "productive" is not affirmed', () => {
     
    });
  });

  test('form should be controlled -- state will change on input change', () => {
    // Mock out the onChange Handler of the inputs, ensure it is called for each input
  });

  test('form should send new cough data up to App on submit', () => {
    // Mock out onSubmit handler on the confirm button 
    // I might need redux for this, my original plan was to have the confirm button live on the app .. 

  });
    
});
