<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";

const props = defineProps<{
  legend: string;
  name: string;
  errors: string | undefined;
  type: InputHTMLAttributes["type"] | "textarea";
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset ">
    <legend class="fieldset-legend">
      {{ props.legend }}
    </legend>
    <Field
      :as="props.type === 'textarea' ? 'textarea' : 'input'"
      :type="props.type"
      :name="props.name"
      :disabled="props.disabled"
      class="w-full"
      :class="{ 'input-error': props.errors, 'input': props.type !== 'textarea', 'textarea': props.type === 'textarea' }"
    />
    <p v-if="props.errors" class="label text-error">
      {{ props.errors }}
    </p>
  </fieldset>
</template>
