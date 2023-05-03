import React, { useReducer, useRef } from 'react';
import '../css/App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';
import { reducer } from '../reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    inputText: string
  ) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT', id: dataId.current, text: inputText });
    dataId.current += 1;
  };

  const handleComplete = (id: number) => {
    dispatch({ type: 'COMPLETE', id });
  };

  const handleEdit = (id: number) => {
    dispatch({ type: 'EDIT', id });
  };

  const handleEditComplete = (id: number, editText: string) => {
    dispatch({ type: 'EDITCOMPLETE', id, text: editText });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE', id });
  };

  return (
    <div className='App'>
      <h1>To-do</h1>
      <TodoInput onSubmit={handleSubmit} />
      <Todolist
        onComplete={handleComplete}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onEditComplete={handleEditComplete}
        state={state}
      />
    </div>
  );
}

export default App;
