<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
<template>
  <div class="min-h-screen bg-bgOverlay overflow-hidden">
    <RouterView v-slot="{ Component }">
      <transition @after-leave="scrollToTop" name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
