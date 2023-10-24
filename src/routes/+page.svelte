<script>
    import AddTodo from "$lib/components/Form/AddTodo.svelte";
	import TodosList from "$lib/components/Todo/List.svelte";
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
    <AddTodo/>
    <TodosList/>
</main>
