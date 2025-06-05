<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
</script>

<template>
  <div v-if="authStore.user" class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1 space-x-2">
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="authStore.user.image">
        </div>
      </div>
      {{ authStore.user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out" class="gap-x-2">
          <Icon name="tabler:logout-2" size="24" />
          Sign out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button v-else :disabled="authStore.isLoading" class="btn btn-accent" @click="authStore.signIn">
    Sign in with Github

    <span v-if="authStore.isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
