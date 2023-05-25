import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
