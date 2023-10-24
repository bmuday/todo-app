export type TodoStore = {
  addTodo: () => void;
  deleteTodo: () => void;
  reset: () => void;
};

export type Todo = {
  id: string;
  completed: boolean;
  text: string;
  createdAt: number;
};
