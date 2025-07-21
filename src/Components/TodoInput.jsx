import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
