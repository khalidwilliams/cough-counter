import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioInput from './RadioInput';

describe('RadioInput', () => {
  it('should render a radio input and a question heading', () => {
    const mockedChangeHandler = jest.fn();
    const inputOptions = [
      {label:'yes'},
      {label: 'no'}
    ];

    const { getAllByRole, getByRole } = render(<RadioInput heading={"title"} options={inputOptions} changeHandler={mockedChangeHandler}/>);

    const [ yesRadio, noRadio] = getAllByRole('radio');
    const header = getByRole('heading', {name: 'title'});

    expect(yesRadio).toBeInTheDocument;
    expect(noRadio).toBeInTheDocument;
    expect(header).toBeInTheDocument;
    
  });


  it('should take in an initial value for radio inputs', () => {
    const mockedUpdateFn = jest.fn();
    const inputOptions = [
      {label:'yes'},
      {label: 'no', checked:true}
    ];

    const { getAllByRole, getByRole } = render(<RadioInput heading={"title"} options={inputOptions} changeHandler={mockedUpdateFn}/>);

    const [ yesRadio, noRadio] = getAllByRole('radio');

    expect(yesRadio).not.toBeChecked();
    expect(noRadio).toBeChecked();

  });

  it('should default to empty inputs if it receives multiple "checked" options', () => {
    const mockedUpdateFn = jest.fn();
    const inputOptions = [
      {label:'yes', checked:true},
      {label: 'no', checked:true}
    ];

    const { getAllByRole, getByRole } = render(<RadioInput heading={"title"} options={inputOptions} changeHandler={mockedUpdateFn}/>);

    const [ yesRadio, noRadio] = getAllByRole('radio');
    
    expect(yesRadio).not.toBeChecked();
    expect(noRadio).not.toBeChecked();
    
  });


  it('should update its parent\'s state when its answer changes', () => {
    const mockedUpdateFn = jest.fn();
    const inputOptions = [
      {label:'yes'},
      {label: 'no'}
    ];

    const { getAllByRole, getByRole } = render(<RadioInput heading={"title"} options={inputOptions} changeHandler={mockedUpdateFn}/>);
    const [ yesRadio, noRadio] = getAllByRole('radio');

    fireEvent.click(yesRadio);
    
    expect(yesRadio).toBeChecked();
    expect(mockedUpdateFn).toBeCalledWith('yes');

    fireEvent.click(noRadio);

    expect(yesRadio).not.toBeChecked();
    expect(noRadio).toBeChecked();
    expect(mockedUpdateFn).toBeCalledWith('no');
    
  });
});
