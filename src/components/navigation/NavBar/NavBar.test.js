import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('Renders a nav', () => {
    const { getByRole } = render(<NavBar/>);
    const nav = getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
