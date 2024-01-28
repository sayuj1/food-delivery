import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
describe('AuthForm Component', () => {
  test('Renders Login form correctly', async () => {

    render(<AuthForm title="Login" />, { wrapper: MemoryRouter });

    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("Login");

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/name@example.com/i);
    const passwordInput = screen.getByPlaceholderText(/min. 8 characters/i);

    fireEvent.change(emailInput, { target: { value: 'sayuj@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(emailInput.value).toBe('sayuj@gmail.com');
    expect(passwordInput.value).toBe('123');

    fireEvent.click(screen.getByTestId('login-button'));
    expect(screen.getByText('LoggingIn...')).toBeInTheDocument();
  });

  test('Renders Signup form correctly', async () => {
    render(<AuthForm title="Sign Up" />, { wrapper: MemoryRouter });

    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("Sign Up");

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/name@example.com/i);
    const passwordInput = screen.getByPlaceholderText(/min. 8 characters/i);

    fireEvent.change(emailInput, { target: { value: 'sayuj@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(emailInput.value).toBe('sayuj@gmail.com');
    expect(passwordInput.value).toBe('123');

    fireEvent.click(screen.getByTestId('signup-button'));
    expect(screen.getByText('Signing Up')).toBeInTheDocument();
  });
});
