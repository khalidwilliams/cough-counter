import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavOption from './NavOption';

describe('NavOption', () => {
  test('Should render a link', () => {
    const { getByRole } = render(<NavOption name="Home" path="/" />);
    const link = getByRole('link', {name: 'Home'});
    expect(link).toBeInTheDocument();
  });
});
