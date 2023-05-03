import { Todo } from './type/todo';

type Action =
  | { type: 'SUBMIT'; id: number }
  | { type: 'COMPLETE'; id: number }
  | { type: 'EDIT'; id: number }
  | { type: 'EDITCOMPLETE'; id: number }
  | { type: 'REMOVE'; id: number }
  | { type: 'INPUTCHANGE'; value: string }
  | { type: 'TEXTAREACHANGE'; value: string };

export const reducer = (state: Todo, action: Action) => {
  switch (action.type) {
    case 'SUBMIT': {
      const newTask = [
        ...state.tasks,
        {
          id: action.id,
          text: state.taskText,
          isCompleted: false,
          isEdit: false
        }
      ];

      return { ...state, taskText: '', tasks: newTask };
    }
    case 'COMPLETE': {
      const nextTask = state.tasks.map((task) =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

      return { ...state, tasks: nextTask };
    }
    case 'EDIT': {
      const nextTask = state.tasks.map((task) =>
        task.id === action.id ? { ...task, isEdit: !task.isEdit } : task
      );
      return { ...state, tasks: nextTask };
    }
    case 'EDITCOMPLETE': {
      const nextTask = state.tasks.map((task) =>
        task.id === action.id
          ? { ...task, text: state.editedTaskText, isEdit: !task.isEdit }
          : task
      );
      return { ...state, tasks: nextTask };
    }
    case 'REMOVE': {
      const nextTask = state.tasks.filter((task) => task.id !== action.id);
      return { ...state, tasks: nextTask };
    }
    case 'INPUTCHANGE': {
      return { ...state, taskText: action.value };
    }
    case 'TEXTAREACHANGE': {
      return { ...state, editedTaskText: action.value };
    }
    default:
      return state;
  }
};
