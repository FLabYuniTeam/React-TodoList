import React from 'react';
import { task } from './App';

const ListItem = ({
  task,
  onEdit,
  onRemove,
  onChange,
  onEditComplete
}: {
  task: task;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEditComplete: (id: number) => void;
}) => {
  const listItem = task.isEdit ? (
    <>
      <textarea onChange={onChange}></textarea>
      <button onClick={() => onEditComplete(task.id)}>수정완료</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => onEdit(task.id)}>수정</button>
    </>
  );
  return (
    <div>
      <li key={task.id}>
        {listItem}
        <button onClick={() => onRemove(task.id)}>삭제</button>
      </li>
    </div>
  );
};

export default ListItem;
