import React from 'react';
import SelectBox from './SelectBox';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Select Box', () => {
  const getUtils = (propsToRender) => {
    return render(<SelectBox {...propsToRender} />);
  };
  const optionsToRender = [
    {value: 'Yes', text:'Yes'},
    {value: 'No', text:'No'}
  ];
  
  test('should be accessible as a combobox', () => {
    const { getByRole } = getUtils({ options:  optionsToRender, labelText:'Yes or No?'} );
    const selectBox = getByRole('combobox');

    expect(selectBox).toBeInTheDocument();
  });

  test('should update its value once changed', () => {
    const { getByRole } = getUtils({ options:  optionsToRender, labelText:'Yes or No?'} );

  });

  test('should be able to take in a list of previous values', () => {
    const { getByRole, getByText, queryByText } = getUtils({ options:  optionsToRender, labelText:'Yes or No?'} );
    const selectBox = getByRole('combobox');
    let yes = queryByText('option');
    let no = queryByText('option', {name: 'No'});
    expect(yes).not.toBeInTheDocument();
    expect(no).not.toBeInTheDocument();
    fireEvent.click(selectBox);
    yes = getByText('Yes');
    no = getByText('No');
    expect(yes).toBeInTheDocument();
    expect(no).toBeInTheDocument();

  });
});
