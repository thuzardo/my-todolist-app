import React from 'react';

function TodoItem({ task, completed, completeTask, deleteTask }) {
  return (
    <li className={`list-group-item ${completed ? 'completed' : ''}`}>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      {!completed && (
        <button className="btn btn-sm btn-primary ms-2" onClick={completeTask}>
          Complete
        </button>
      )}
      <button className="btn btn-sm btn-danger ms-2" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
