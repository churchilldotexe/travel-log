<script setup lang="ts">
import type { FetchError } from "ofetch";

import { toTypedSchema } from "@vee-validate/zod";

import { InsertLocationSchema } from "~/lib/db/schema/location";

const router = useRouter();
const isLoading = ref(false);
const isSubmitted = ref(false);
const errorMsg = ref<string | undefined>(undefined);

const { handleSubmit, errors, meta, setErrors } = useForm({
// @ts-expect-error correct implementation InsertLocationSchema is a zod schema as per drizzle
  validationSchema: toTypedSchema(InsertLocationSchema),
});

const handleSubmitForm = handleSubmit(async (values) => {
  try {
    errorMsg.value = "";
    isLoading.value = true;

    const { $csrfFetch } = useNuxtApp();
    await $csrfFetch("/api/locations", {
      method: "post",
      body: values,
    });
    isSubmitted.value = true;
    navigateTo("/dashboard");
  }
  catch (e) {
    const error = e as FetchError;
    setErrors(error.data.data);
    errorMsg.value = error.statusMessage || "Unknown error occured while adding location.";
  }
  finally {
    isLoading.value = false;
  }
});

onBeforeRouteLeave(() => {
  if (!isSubmitted.value && meta.value.dirty) {
    // eslint-disable-next-line no-alert
    const confirmLeave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
    if (confirmLeave) {
      return true;
    }
    return true;
  }
});
</script>

<template>
  <div class="flex flex-col justify-center max-w-md gap-4 container mx-auto py-4">
    <h1>Add Location</h1>
    <div v-if="errorMsg" role="alert" class="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ errorMsg }}</span>
    </div>
    <p>
      A location is a place you have traveled or will travel to. It can be a
      city, country, state or point of interest. You can add specific times you
      visited this location after adding it.
    </p>
    <form class="flex flex-col gap-3" @submit.prevent="handleSubmitForm">
      <AppFieldInput
        legend="Name"
        name="name"
        type="text"
        :errors="errors.name"
        :disabled="isLoading"
      />

      <AppFieldInput
        legend="Description"
        type="textarea"
        name="description"
        :errors="errors.description"
        :disabled="isLoading"
      />

      <AppFieldInput
        legend="Lattitude"
        type="number"
        name="lat"
        :errors="errors.lat"
        :disabled="isLoading"
      />

      <AppFieldInput
        legend="Longitude"
        type="number"
        name="long"
        :errors="errors.long"
        :disabled="isLoading"
      />

      <div class="flex justify-end gap-3">
        <button
          :disabled="isLoading"
          type="button"
          class="btn btn-outline"
          @click="router.back"
        >
          <Icon name="tabler:arrow-left" /> Cancel
        </button>
        <button :disabled="isLoading" type="submit" class="btn btn-primary">
          Add
          <span v-if="isLoading" class="loading loading-spinner loading-sm" />
          <Icon v-else name="tabler:circle-plus" />
        </button>
      </div>
    </form>
  </div>
</template>
