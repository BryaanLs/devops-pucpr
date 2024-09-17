/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders To-Do List title', () => {
    render(<App />);
    expect(screen.getByText('To-Do List')).toBeInTheDocument();
  });

  test('renders input for adding tasks', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
  });
});
