import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

test(`Should have 'Welcome' word`, () => {
  render(<Home />);

  const element = screen.getByText(/Welcome to Test Task Application!/i);

  expect(element).toBeInTheDocument();
});
