<script lang="ts">
	import { todoToggleCompleted, deleteTodo } from "$lib/stores/todos";
    import type { Todo } from "$lib/types";
    
    export let todo: Todo;
</script>

<li class="flex items-center px-4 py-2 my-2 bg-white border border-gray-200 rounded-lg shadow-sm">
    <input name="completed" type="checkbox" checked={todo.completed} on:change={() => todoToggleCompleted(todo.id)} class="w-5 h-5 mr-2 form-checkbox"/>
    <span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
    <button class="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 hover: focus:outline-none focus:shadow-outline" on:click={() => deleteTodo(todo.id)}>Delete</button>
</li>

<style></style>