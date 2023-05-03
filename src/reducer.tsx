import { Todo } from './type/todo';

type Action =
  | { type: 'SUBMIT'; id: number; text: string }
  | { type: 'COMPLETE'; id: number }
  | { type: 'EDIT'; id: number }
  | { type: 'EDITCOMPLETE'; id: number; text: string }
  | { type: 'REMOVE'; id: number };

export const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'SUBMIT': {
      const newTask = {
        id: action.id,
        text: action.text,
        isCompleted: false,
        isEdit: false
      };
      return [...state, newTask];
    }
    case 'COMPLETE': {
      const nextTask = state.map((task) =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

      return nextTask;
    }
    case 'EDIT': {
      const nextTask = state.map((task) =>
        task.id === action.id ? { ...task, isEdit: !task.isEdit } : task
      );
      return nextTask;
    }
    case 'EDITCOMPLETE': {
      const nextTask = state.map((task) =>
        task.id === action.id
          ? { ...task, text: action.text, isEdit: !task.isEdit }
          : task
      );
      return nextTask;
    }
    case 'REMOVE': {
      const nextTask = state.filter((task) => task.id !== action.id);
      return nextTask;
    }
    default:
      return state;
  }
};
