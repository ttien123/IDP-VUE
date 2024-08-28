<script setup lang="ts">
import { useGetSheet } from "src/store/sheetState";
const propsSheet = useGetSheet();
interface Props {
  isMobile?: boolean;
}

defineProps<Props>();
const listNav = [
  {
    id: 0,
    name: "Browse Food",
    to: '#main'
  },
  {
    id: 1,
    name: "Download App",
    to: '#main'
  },
  {
    id: 2,
    name: "About Us",
    to: '#main'
  },
];
</script>

<template>
  <nav
    :class="`flex items-center justify-center ${isMobile ? 'flex-col' : ''}`"
  >
    <div
      :class="`text-white group cursor-pointer text-[18px] px-2 font-Poppins font-normal relative ${isMobile ? 'text-[24px] font-bold mt-1 mb-5 font-roboto' : 'mr-[25px] leading-[1.9]'}`"
      v-for="item of listNav"
      :key="item.id"
      v-scroll-to="item.to"
      @click="propsSheet.setIsOpen"
    >
      {{ item.name }}
      <div
        class="btnPrimary h-[2px] p-0 w-0 border-none group-hover:w-full transition-all duration-500"
      ></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
