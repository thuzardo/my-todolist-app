import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
