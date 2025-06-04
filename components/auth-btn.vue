<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();
const isLoading = ref(false);

async function signIn() {
  isLoading.value = true;
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}
</script>

<template>
  <button :disabled="isLoading" class="btn btn-accent" @click="signIn">
    Sign in with Github

    <span v-if="isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
