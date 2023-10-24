export type TodoStore = {
  addTodo: () => void;
  deleteTodo: () => void;
  reset: () => void;
};

export type Todo = {
  id: string;
  completed: boolean;
  text: string;
  created_at: number;
  user_id: string;
};

export type User = {
  id: string;
};
