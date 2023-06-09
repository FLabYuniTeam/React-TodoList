import React from 'react';
import { Task } from './App';
import { TodoStateHandler } from './App';

const ListItem = ({
  onComplete,
  onEdit,
  onRemove,
  onChange,
  onEditComplete,
  task
}: {
  onComplete: TodoStateHandler;
  onEdit: TodoStateHandler;
  onRemove: TodoStateHandler;
  onEditComplete: TodoStateHandler;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  task: Task;
}) => {
  const CompleteButtonText = task.isCompleted ? '완료취소' : '완료';
  const listItem = task.isEdit ? (
    <>
      <textarea onChange={onChange}></textarea>
      <button onClick={() => onComplete(task.id)}>{CompleteButtonText}</button>
      <button onClick={() => onEditComplete(task.id)}>수정완료</button>
    </>
  ) : (
    <>
      {task.isCompleted ? '[완료] ' + task.text : task.text}
      <button onClick={() => onComplete(task.id)}>{CompleteButtonText}</button>
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
