import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Todo } from "$lib/types";

export const todos = writable<Todo[]>([]);

export const addTodo = (text: string) => {
  todos.update((todosList) => {
    return [
      ...todosList,
      { id: uuid(), completed: false, text, createdAt: Date.now() },
    ];
  });
};

export const deleteTodo = (todoId: string) => {
  todos.update((todosList) => {
    return todosList.filter((t) => t.id !== todoId);
  });
};

export const reset = () => {
  todos.update(() => {
    return [];
  });
};

export const todoToggleCompleted = (todoId: string) => {
  todos.update((todosList) => {
    let index = -1;
    for (let i = 0; i < todosList.length; i++) {
      if (todosList[i].id === todoId) {
        index = i;
        break;
      }
    }
    if (index !== -1) todosList[index].completed = !todosList[index].completed;
    return todosList;
  });
};
