export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  isEdit: boolean;
}

export type TodoStateHandler = (id: number, text?: string) => void;
