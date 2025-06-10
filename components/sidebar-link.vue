<script setup lang="ts">
const props = defineProps<{
  href: string;
  showLabel: boolean;
  icon: string;
  label: string;
}>();

const route = useRoute();
</script>

<template>
  <div
    class="tooltip tooltip-right" :class="{ contents: props.showLabel, block: !props.showLabel }"
    :data-tip="props.showLabel ? undefined : props.label"
  >
    <NuxtLink
      :class="{
        'btn-active': route.path === props.href,
        'justify-start': props.showLabel,
        'justify-center': !props.showLabel,
      }" class="btn btn-outline btn-primary" :to="props.href"
    >
      <Icon :name="props.icon" size="20" />

      <Transition name="bounce">
        <span v-if="props.showLabel">{{ props.label }}</span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.bounce-enter-active,
.bounce-leave-active {
  animation: bounce-in 0.2s both;
  transform-origin: left center;
}

.bounce-enter-active {
  animation-delay: 0.1s;
}

.bounce-leave-active {
  animation-direction: reverse;
}

@keyframes bounce-in {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
</style>
