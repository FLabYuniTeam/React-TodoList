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
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='할 일을 입력해 주세요.'
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default TodoInput;
