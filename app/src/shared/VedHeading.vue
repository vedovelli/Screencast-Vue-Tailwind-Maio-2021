<template>
  <h1 v-if="type === '1'" class="text-primary text-2xl font-bold py-4">
    <slot />
  </h1>
  <h3 v-else class="text-primary text-base font-bold py-4">
    <slot />
  </h3>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>
