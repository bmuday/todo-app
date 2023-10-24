import { writable, type Writable } from "svelte/store";
import type { Todo } from "$lib/types";
import { supabase } from "$lib";

export const todos: Writable<Todo[]> = writable([]);

export const loadTodos = async (userId: string) => {
  const { data, error } = await supabase.from("todo").select().match({user_id: userId});
  console.log("loadTodos", data)
  if (error) console.log("error", error);
  if (data) todos.set(data);
};

export const addTodo = async (text: string, user_id: string) => {
  const { data, error } = await supabase.from("todo").insert({ text, user_id }).select();
  
  if (error) {
    console.log("error", error);
    return;
  }
  if (data) {
    todos.update((todosList) => {
      console.log("update", [...todosList, data[0]])
      return [...todosList, data[0]] 
    });
  }
};

export const deleteTodo = async (todoId: string) => {
  const { error } = await supabase.from("todo").delete().match({ id: todoId });
  if (error) {
    console.log("error", error);
    return;
  }
  todos.update((todosList) => {
    return todosList.filter((t) => t.id !== todoId);
  });
};

export const reset = async () => {
  const { error } = await supabase.from("todo").delete();
  if (error) {
    console.log("error", error);
    return;
  }
  todos.update(() => {
    return [];
  });
};

export const todoToggleCompleted = async (
  todoId: string,
  currentState: boolean
) => {
  const { error } = await supabase
    .from("todo")
    .update({ completed: !currentState })
    .match({ id: todoId });
  if (error) {
    console.log("error", error);
    return;
  }
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
