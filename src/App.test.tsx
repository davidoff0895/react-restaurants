import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '@/App';
import { restaurants } from '@/data/restaurants';

test('renders learn react link', () => {
  render(<App restaurants={restaurants} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
