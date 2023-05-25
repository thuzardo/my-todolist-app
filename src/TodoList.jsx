import React from 'react';
import TodoItem from './TodoItem';
import Card from 'react-bootstrap/Card';

function TodoList({ tasks, completeTask, deleteTask }) {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Tasks</Card.Title>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task.task}
              completed={task.completed}
              completeTask={() => completeTask(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default TodoList;
