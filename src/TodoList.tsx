import React from 'react';
import { task } from './App';
import ListItem from './ListItem';

const Todolist = ({
  onComplete,
  onRemove,
  onEdit,
  onChange,
  onEditComplete,
  tasks
}: {
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEditComplete: (id: number) => void;
  tasks: task[];
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ListItem
          task={task}
          key={task.id}
          onComplete={onComplete}
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
