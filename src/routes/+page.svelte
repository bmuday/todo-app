<script>
    import AddTodo from "../components/Form/AddTodo.svelte";
	import TodosList from "../components/Todo/List.svelte";
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
    <AddTodo/>
    <TodosList/>
</main>
