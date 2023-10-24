<script>
	import { user } from "$lib/stores/auth";
	import { addTodo } from "$lib/stores/todos";
    let todo = ""

    const handleSubmit = () => {
        if($user) addTodo(todo, $user.id)
        todo = ""
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col mb-2 text-sm">
    <label for="todo" class="mb-2 font-bold text-gray-800">Todo</label>
    <input type="text" name="todo" bind:value={todo} placeholder="Add your todo" class="p-2 border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-gray-500">
</div>
<button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600">Submit</button>
</form>