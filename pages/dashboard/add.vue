<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col justify-center max-w-md gap-4 container mx-auto">
    <h1>Add Location</h1>
    <p>
      A location is a place you have traveled or will travel to. It can be a
      city, country, state or point of interest. You can add specific times you
      visited this location after adding it.
    </p>
    <form class="flex flex-col gap-3">
      <fieldset class="fieldset ">
        <legend class="fieldset-legend">
          Name
        </legend>
        <input type="text" name="name" class="input w-full">
        <!--        <p class="label">Optional</p> -->
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Name
        </legend>
        <textarea class="textarea w-full" name="description" />
        <!--        <p class="label">Optional</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Latitude
        </legend>
        <input type="text" name="lat" class="input w-full">
        <!--        <p class="label">Optional</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Longitude
        </legend>
        <input type="text" name="long" class="input w-full">
        <!--        <p class="label">Optional</p> -->
      </fieldset>
      <div class="flex justify-end gap-3">
        <button type="button" class="btn btn-outline">
          <Icon name="tabler:arrow-left" /> Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          Add <Icon name="tabler:circle-plus" />
        </button>
      </div>
    </form>
  </div>
</template>
