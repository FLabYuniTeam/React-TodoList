import React from 'react';
import { task } from './App';
import ListItem from './ListItem';
import { eventHandlerFunction } from './App';

const Todolist = ({
  onComplete,
  onRemove,
  onEdit,
  onChange,
  onEditComplete,
  tasks
}: {
  onComplete: eventHandlerFunction;
  onRemove: eventHandlerFunction;
  onEdit: eventHandlerFunction;
  onEditComplete: eventHandlerFunction;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
