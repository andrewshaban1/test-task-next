import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Form from '@/components/EnryForm/EntryForm';

describe('EntryForm', () => {
  test(`Renders the form elements`, () => {
    render(<Form />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  test('Displays validation error messages', async () => {
    render(<Form />);

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(
      await screen.findByText(/First Name is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Last Name is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Value must be a number/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Invalid email address/i)
    ).toBeInTheDocument();
  });
});
