import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();

  const isLoading = computed(() => session.value.isRefetching || session.value.isPending);

  const user = computed(() => session.value.data?.user);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    isLoading,
    signIn,
    signOut,
    user,
  };
});
