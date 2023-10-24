<script>
	import { supabase } from "$lib";

    let loading = false
    let email = ""
    let password = ""

    const handleLogin = async () => {
        try {
        loading = true
        console.log("email", email)
        const {error} = await supabase.auth.signInWithPassword({email, password}) 
        if(error) throw error
        } catch (error) {
            console.log("error", error)
        } finally {
            loading = false
        }
    }
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="mt-2 text-center">Sign In via magic link with your email below.</p>
<form on:submit|preventDefault={handleLogin}>
    <div class="flex flex-col mb-2 text-sm">
        <label for="email" class="mb-2 font-bold text-gray-800">Email</label>
        <input type="email" name="email" class="p-2 border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-gray-500" bind:value={email} placeholder="Enter your email">
        <label for="password" class="mb-2 font-bold text-gray-800">Password</label>
        <input type="password" name="password" class="p-2 border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-gray-500" bind:value={password} placeholder="Enter your password">
    </div>
    <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600">Log In</button>
</form>