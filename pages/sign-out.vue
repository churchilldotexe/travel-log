<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <section class="container m-auto min-h-96 flex justify-center items-center flex-col gap-4">
    <span class="loading loading-spinner w-12" />
  </section>
</template>
