import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
