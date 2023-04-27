import React from 'react';
import { Task } from './App';
import ListItem from './ListItem';
import { TodoStateHandler } from './App';

const Todolist = ({
  onComplete,
  onRemove,
  onEdit,
  onChange,
  onEditComplete,
  tasks
}: {
  onComplete: TodoStateHandler;
  onRemove: TodoStateHandler;
  onEdit: TodoStateHandler;
  onEditComplete: TodoStateHandler;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  tasks: Task[];
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
