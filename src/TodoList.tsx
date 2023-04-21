import React from 'react';
import { task } from './App';

const Todolist = ({
  tasks,
  onRemove
}: {
  tasks: task[];
  onRemove: (id: number) => void;
}) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <li>
              {task.text}
              <button>수정</button>
              <button onClick={() => onRemove(task.id)}>삭제</button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Todolist;
