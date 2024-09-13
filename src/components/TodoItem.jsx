/* eslint-disable react/prop-types */
const TodoItem = ({ index, todo, toggleTodo, removeTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
