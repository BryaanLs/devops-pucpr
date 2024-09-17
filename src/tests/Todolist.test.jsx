import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { describe, test, expect, vi } from 'vitest';

describe('TodoList component', () => {
  const todos = [{ text: 'Test todo', completed: false }];
  const addTodo = vi.fn();
  const toggleTodo = vi.fn();
  const removeTodo = vi.fn();

  test('renders the todo items', () => {
    render(<TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('adds a new todo when add button is clicked', () => {
    render(<TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    fireEvent.change(screen.getByPlaceholderText('Add a new task'), { target: { value: 'New task' } });
    fireEvent.click(screen.getByText('Add'));
    expect(addTodo).toHaveBeenCalledWith('New task');
  });

  test('displays multiple todos', () => {
    const multipleTodos = [
      { text: 'Todo 1', completed: false },
      { text: 'Todo 2', completed: true }
    ];
    render(<TodoList todos={multipleTodos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });
});
