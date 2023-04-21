import React from 'react';
import { task } from './App';

const Todolist = ({ tasks }: { tasks: task[] }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};

export default Todolist;
