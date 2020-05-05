import React from 'react';
import Banner from './Banner';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Banner', () => {
  test('should have a role of heading', () => {
    const { getByRole } = render(<Banner />);

    const bannerElement = getByRole('heading');

    expect(bannerElement).toBeInTheDocument();
  });

  
  test('should have some text content', () => {
    const { getByRole } = render(<Banner />);

    const bannerElement = getByRole('heading');

    expect(bannerElement).toHaveTextContent('Cough Counter');
    
  });
});
