<template>
  <div class="default-box" :class="{ highlight }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    highlight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.default-box {
  @apply flex items-center justify-center bg-gray-200 h-52 w-full sm:rounded sm:shadow border border-gray-300;
}

.default-box.highlight {
  @apply bg-red-400;
}
</style>
