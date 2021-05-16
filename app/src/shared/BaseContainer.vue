<template>
  <section class="base-container">
    <slot />
  </section>
</template>

<style scoped>
.base-container {
  @apply grid gap-4 sm:grid-cols-2 md:grid-cols-3 container mx-auto;
}
</style>
