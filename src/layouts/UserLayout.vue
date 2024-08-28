<script setup lang="ts">
import Header from "src/components/Header/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
