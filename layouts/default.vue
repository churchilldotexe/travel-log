<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
