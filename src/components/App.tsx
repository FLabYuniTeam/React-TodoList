import React, { useReducer } from 'react';
import '../css/App.css';
import TodoInput from './TodoInput';
import Todolist from './TodoList';
import { reducer } from '../reducer';
import shortid from 'shortid';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const handleSubmitButtonClick = (
    e: React.FormEvent<HTMLFormElement>,
    inputText: string
  ) => {
    e.preventDefault();
    const dataId = shortid.generate();
    dispatch({ type: 'SUBMIT', id: dataId, text: inputText });
  };

  const handleCompleteButtonClick = (id: string) => {
    dispatch({ type: 'COMPLETE', id });
  };

  const handleEditButtonClick = (id: string) => {
    dispatch({ type: 'EDIT', id });
  };

  const handleEditCompleteButtonClick = (id: string, editText: string) => {
    dispatch({ type: 'EDITCOMPLETE', id, text: editText });
  };

  const handleRemoveButtonClick = (id: string) => {
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
