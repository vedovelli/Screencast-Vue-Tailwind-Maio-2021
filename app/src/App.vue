<template>
  <base-container class="sm:p-8">
    <default-box v-for="item in list" :key="item.id" :highlight="item.promo">{{
      item.title
    }}</default-box>
  </base-container>
</template>

<script>
import BaseContainer from "./shared/BaseContainer.vue";
import DefaultBox from "./shared/DefaultBox.vue";
export default {
  components: { BaseContainer, DefaultBox },
  setup() {
    const list = [
      { id: 1, title: "Tailwind CSS" },
      { id: 2, title: "Tailwind CSS" },
      { id: 3, title: "Tailwind CSS", promo: true },
      { id: 4, title: "Tailwind CSS" },
      { id: 5, title: "Tailwind CSS", promo: true },
      { id: 6, title: "Tailwind CSS" },
      { id: 7, title: "Tailwind CSS" },
      { id: 8, title: "Tailwind CSS", promo: true },
      { id: 9, title: "Tailwind CSS" },
    ];

    return { list };
  },
};
</script>

<style></style>
