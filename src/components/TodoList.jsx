/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddClick = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-list">
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
