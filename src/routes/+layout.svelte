<script>
	import Login from '../components/Auth/Login.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { user } from '$lib/stores/auth';
	import '../app.css';
	import { checkUser } from '../hooks/utils';

	$: checkUser()
	
</script>

<div class="container max-w-lg mx-auto my-6">
	{#if $user}
	<Navbar/>
	<slot />
	{:else}
	<Login/>
	{/if}
</div>
