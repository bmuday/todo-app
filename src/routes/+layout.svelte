<script>
	import { supabase } from '$lib';
	import Login from '$lib/components/Auth/Login.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { user } from '$lib/stores/auth';
	import { loadTodos } from '$lib/stores/todos';
	import '../app.css';

	supabase.auth.onAuthStateChange((_, session) => {
		
		if(session?.user) {
			console.log("user", session.user)
			user.set(session.user)
			loadTodos(session.user.id)
		}
	})
	
</script>

<div class="container max-w-lg mx-auto my-6">
	{#if $user}
	<Navbar/>
	<slot />
	{:else}
	<Login/>
	{/if}
</div>
