import React from 'react';
import { task } from './App';
import ListItem from './ListItem';

const Todolist = ({
  tasks,
  onRemove,
  onEdit,
  onChange,
  onEditComplete
}: {
  tasks: task[];
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEditComplete: (id: number) => void;
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ListItem
          task={task}
          key={task.id}
          onRemove={onRemove}
          onEdit={onEdit}
          onChange={onChange}
          onEditComplete={onEditComplete}
        />
      ))}
    </ul>
  );
};

export default Todolist;

//TODO: 완료기능 구현, 수정완료기능 구현
