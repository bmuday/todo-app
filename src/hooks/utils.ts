import { supabase } from "$lib";
import { user } from "$lib/stores/auth";
import { loadTodos } from "$lib/stores/todos";

export const checkUser = () => {
  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user) {
      console.log("user", session.user);
      user.set(session.user);
      loadTodos(session.user.id);
    }
  });
};
