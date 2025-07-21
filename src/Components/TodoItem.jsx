import React, { useState } from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.item);

  const handleSave = () => {
    if (!editText.trim()) return;
    onUpdate(todo._id, editText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex flex-grow-1 me-2">
          <input
            className="form-control me-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span>{todo.item}</span>
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo._id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
