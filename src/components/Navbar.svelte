<script>
	import { supabase } from "$lib";
	import { user } from "$lib/stores/auth";

    const logout = async () => {
        console.log("logout")
        try {
            const { error } = await supabase.auth.signOut()
            if(error) throw error  
            
            user.set(null)
        } catch (error) {
            console.log("error", error)
        }
    }
</script>

<header class="flex justify-end my-4">
    <button on:click={logout} class="px-4 py-2 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600">Log Out</button>
</header>