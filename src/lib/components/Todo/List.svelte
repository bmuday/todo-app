<script>
	import { todos } from "$lib/stores/todos";
	import Card from "./Card.svelte";
</script>

{#each $todos as todo(todo.id)}
    <Card {todo} />
{/each}
<style></style>