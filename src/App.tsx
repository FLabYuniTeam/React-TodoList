import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';

interface Todo {
  newId: number;
  taskText: string;
  editedTaskText: string;
  tasks: task[];
}

export interface task {
  id: number;
  text: string;
  isCompleted: boolean;
  isEdit: boolean;
}

function App() {
  const [state, setState] = useState<Todo>({
    newId: 1,
    taskText: '',
    editedTaskText: '',
    tasks: []
  });

  const { newId, taskText, editedTaskText, tasks } = state;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setState({
      ...state,
      newId: newId + 1,
      tasks: [
        ...tasks,
        { id: newId, text: taskText, isCompleted: false, isEdit: false }
      ],
      taskText: ''
    });
  };

  const handleEditComplete = (targetId: number) => {
    const nextState = tasks.map((task) => {
      if (task.id === targetId) {
        task.text = editedTaskText;
        task.isEdit = !task.isEdit;
      }
      return task;
    });
    setState({
      ...state,
      tasks: nextState,
      editedTaskText: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setState({
      ...state,
      taskText: (e.target as HTMLInputElement).value
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target === null) return;
    setState({
      ...state,
      editedTaskText: (e.target as HTMLTextAreaElement).value
    });
  };

  const handleComplete = (id: number) => {
    const nextState = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setState({
      ...state,
      tasks: nextState
    });
  };

  const handleRemove = (id: number) => {
    const nextState = tasks.filter((task) => task.id !== id);
    setState({
      ...state,
      tasks: nextState
    });
  };

  const handleEdit = (id: number) => {
    const nextState = tasks.map((task) => {
      if (task.id === id) {
        task.isEdit = !task.isEdit;
      }
      return task;
    });
    setState({
      ...state,
      tasks: nextState
    });
  };

  return (
    <div className='App'>
      <h1>To-do</h1>
      <TodoInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={taskText}
      />
      <Todolist
        onComplete={handleComplete}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onChange={handleTextAreaChange}
        onEditComplete={handleEditComplete}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
