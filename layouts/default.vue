<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <AppNavBar />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>
