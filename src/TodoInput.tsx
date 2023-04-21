import React from 'react';

const TodoInput = ({
  onSubmit,
  onChange,
  value
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
