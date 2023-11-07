export type TodoStore = {
  addTodo: () => void;
  deleteTodo: () => void;
  reset: () => void;
};

export type Todo = {
  id: string;
  created_at: number;
  completed: boolean;
  text: string;
  user_id: string;
};

export type User = {
  id: string;
};
