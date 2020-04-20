import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoughForm from './CoughForm';

describe('CoughForm', () => {
  
  test('should render a form on the page', () => {
    const { getByText, getAllByRole, getByRole } = render(<CoughForm/>);
    expect(getByRole('form')).toBeInTheDocument();
    expect(getByText('New Cough')).toBeInTheDocument();
    expect(getAllByRole('radio', {name: 'Yes'})[0]).toBeInTheDocument();
    expect(getAllByRole('radio', {name: 'Yes'})[1]).toBeInTheDocument();
    expect(getAllByRole('radio', {name: 'No'})[0]).toBeInTheDocument();
    expect(getAllByRole('radio', {name: 'No'})[1]).toBeInTheDocument();
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
    test('should reveal mucus option if affirmed', () => {
      // When productive gets value 'yes', the mucus field will appear on the page
      const { getByRole } = render(<CoughForm />);
      const productiveYesInput = getByRole('radio', {name: 'Yes'});
      fireEvent.click(productiveYesInput);

      expect(getByRole('menu', {name: 'Mucus Color'})).toBeInTheDocument();

    });

    test('"mucus" input should not render if "productive" is not affirmed', () => {
     
    });

    test('should reveal blood option if affirmed', () => {
      // When productive gets value 'yes', the blood field will appear on the page
      const { getByRole, getAllByRole } = render(<CoughForm />);
      const productiveYesInput = getAllByRole('radio', {name: 'Yes'})[0];
      fireEvent.click(productiveYesInput);

      expect(getByRole('heading', {name: 'Blood?'})).toBeInTheDocument();

    });

    test('"blood" input should not render if "productive" is not affirmed', () => {
     
    });
  });


  test('form should send new cough data up to App on submit', () => {
    // Mock out onSubmit handler on the confirm button 
    // I might need redux for this, my original plan was to have the confirm button live on the app .. 

  });
    
});
