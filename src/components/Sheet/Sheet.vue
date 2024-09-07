<script setup lang="ts">
import CloseIcon from "src/assets/icons/CloseIcon.vue";
import { ref } from "vue";

const isOpen = ref<Boolean>(false);
</script>

<template>
  <div class="flex items-center justify-center">
    <button class="cursor-pointer" @click="isOpen = !isOpen">
      <slot name="btn"></slot>
    </button>
    <div
      v-show="isOpen"
      @click="isOpen = !isOpen"
      class="bg-black transition-all duration-500 fixed inset-0 opacity-70"
    ></div>
    <div
      @click.stop
      class="fixed z-10 top-0 right-0 bottom-0 bg-white w-screen md:w-[384px] h-screen transition-all duration-500"
      :class="[isOpen ? 'translate-x-[0]' : 'translate-x-[100%]']"
    >
      <button @click="isOpen = !isOpen" class="p-1 absolute z-10 right-6 top-5">
        <CloseIcon :width="30" :height="30" />
      </button>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
