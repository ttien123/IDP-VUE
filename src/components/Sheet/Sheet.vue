<script setup lang="ts">
import CloseIcon from "src/assets/icons/CloseIcon.vue";
import { useGetSheet } from "src/store/sheetState";
const propsSheet = useGetSheet();
</script>

<template>
  <div class="flex items-center justify-center">
    <button class="cursor-pointer" @click="propsSheet.setIsOpen">
      <slot name="btn"></slot>
    </button>
    <div
      v-show="propsSheet.isOpen"
      @click="propsSheet.setIsOpen"
      class="bg-black transition-all duration-500 fixed inset-0 opacity-70"
    ></div>
    <div
      class="fixed z-10 top-0 right-0 bottom-0 bg-white w-screen h-screen transition-all duration-500"
      :class="[propsSheet.isOpen ? 'translate-y-[0]' : 'translate-y-[100%]']"
    >
      <button
        @click="propsSheet.setIsOpen"
        class="p-1 absolute z-10 right-6 top-5"
      >
        <CloseIcon :width="30" :height="30" />
      </button>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
