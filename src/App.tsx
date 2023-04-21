import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';

interface Todo {
  newId: number;
  taskText: string;
  tasks: task[];
}

export interface task {
  id: number;
  text: string;
}

function App() {
  const [state, setState] = useState<Todo>({
    newId: 100,
    taskText: '',
    tasks: []
  });

  const { newId, taskText, tasks } = state;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, text: taskText }],
      taskText: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setState({
      ...state,
      taskText: (e.target as HTMLInputElement).value
    });
  };

  return (
    <div className='App'>
      <h1>To-do</h1>
      <TodoInput
        value={taskText}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <Todolist tasks={tasks} />
    </div>
  );
}

export default App;
