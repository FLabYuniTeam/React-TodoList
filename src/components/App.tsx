import React, { useReducer, useRef } from 'react';
import '../css/App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';
import { reducer } from '../reducer';
import { Todo } from '../type/todo';

const initialState: Todo = {
  taskText: '',
  editedTaskText: '',
  tasks: []
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dataId = useRef(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT', id: dataId.current });
    dataId.current += 1;
  };

  const handleComplete = (id: number) => {
    dispatch({ type: 'COMPLETE', id });
  };

  const handleEdit = (id: number) => {
    dispatch({ type: 'EDIT', id });
  };

  const handleEditComplete = (id: number) => {
    dispatch({ type: 'EDITCOMPLETE', id });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE', id });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    dispatch({ type: 'INPUTCHANGE', value: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target === null) return;
    dispatch({ type: 'TEXTAREACHANGE', value: e.target.value });
  };

  return (
    <div className='App'>
      <h1>To-do</h1>
      <TodoInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={state.taskText}
      />
      <Todolist
        onComplete={handleComplete}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onChange={handleTextAreaChange}
        onEditComplete={handleEditComplete}
        tasks={state.tasks}
      />
    </div>
  );
}

export default App;
