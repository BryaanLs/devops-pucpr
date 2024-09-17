import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { describe, test, expect, vi } from 'vitest';

describe('TodoItem component', () => {
  const todo = { text: 'Test todo', completed: false };
  const toggleTodo = vi.fn();
  const removeTodo = vi.fn();

  test('renders the todo text', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('calls toggleTodo when checkbox is clicked', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(toggleTodo).toHaveBeenCalledTimes(1);
  });

  test('calls removeTodo when remove button is clicked', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    fireEvent.click(screen.getByText('Remove'));
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });

  test('checkbox reflects the completed state', () => {
    const completedTodo = { text: 'Completed todo', completed: true };
    render(<TodoItem todo={completedTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
