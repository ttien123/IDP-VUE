<script setup lang="ts">
const { width } = withDefaults(
  defineProps<{ width?: number; height?: number }>(),
  {
    width: 25,
    height: 25,
  },
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    style="fill: white;"
  >
    <path
      d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped></style>
