<script setup lang="ts">
const { width, height } = withDefaults(
  defineProps<{ width?: number; height?: number }>(),
  {
    width: 24,
    height: 24,
  },
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    style="fill: white"
  >
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
  </svg>
</template>

<style lang="scss" scoped></style>
