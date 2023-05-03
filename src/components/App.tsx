import React, { useReducer, useRef } from 'react';
import '../css/App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';
import { reducer } from '../reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const handleSubmitButtonClick = (
    e: React.FormEvent<HTMLFormElement>,
    inputText: string
  ) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT', id: dataId.current, text: inputText });
    dataId.current += 1;
  };

  const handleCompleteButtonClick = (id: number) => {
    dispatch({ type: 'COMPLETE', id });
  };

  const handleEditButtonClick = (id: number) => {
    dispatch({ type: 'EDIT', id });
  };

  const handleEditCompleteButtonClick = (id: number, editText: string) => {
    dispatch({ type: 'EDITCOMPLETE', id, text: editText });
  };

  const handleRemoveButtonClick = (id: number) => {
    dispatch({ type: 'REMOVE', id });
  };

  return (
    <div className='App'>
      <h1>To-do</h1>
      <TodoInput onSubmit={handleSubmitButtonClick} />
      <Todolist
        onComplete={handleCompleteButtonClick}
        onRemove={handleRemoveButtonClick}
        onEdit={handleEditButtonClick}
        onEditComplete={handleEditCompleteButtonClick}
        state={state}
      />
    </div>
  );
};

export default App;
