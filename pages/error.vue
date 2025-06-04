<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "unknown error occured";
</script>

<template>
  <section class="container m-auto min-h-96 flex justify-center items-center flex-col gap-4">
    <div role="alert" class="alert alert-error mx-auto min-w-1/2 place-content-center shadow-md">
      <span class="text-center text-lg capitalize text-shadow-lg">Error! {{ error }}!</span>
    </div>
    <NuxtLink class="btn btn-primary inline-flex items-center">
      Back to Home
      <Icon name="tabler:arrow-back-up" size="24" />
    </NuxtLink>
  </section>
</template>
