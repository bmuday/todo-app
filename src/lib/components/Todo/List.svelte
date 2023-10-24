<script>
	import { todos } from "$lib/stores/todos";
	import { fade } from "svelte/transition";
	import Card from "./Card.svelte";
</script>

{#each $todos as todo(todo.id)}
    <div transition:fade>
		<Card {todo} />
	</div>
{/each}
<style></style>