<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
</script>

<template>
  <button :disabled="authStore.isLoading" class="btn btn-accent" @click="authStore.signIn">
    Sign in with Github

    <span v-if="authStore.isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
