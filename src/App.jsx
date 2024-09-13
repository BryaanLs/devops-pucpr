import  { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import "./styles.css"
const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    if (todos.length > 0) { 
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
