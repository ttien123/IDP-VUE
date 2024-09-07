<script setup lang="ts">
import logo from "src/assets/img/logo-white-small.png";
import Navbar from "../Navbar/Navbar.vue";
</script>

<template>
  <div
    class="w-full h-full bg-bgMobileNav bg-no-repeat bg-cover bg-center relative py-10 px-8 flex items-center justify-center"
  >
    <div class="bg-black absolute inset-0 opacity-70 z-0"></div>
    <div class="maxContent relative z-10">
      <RouterLink to="/">
        <img :src="logo" alt="logo" class="mx-auto mb-8 py-1" />
      </RouterLink>
      <div>
        <Navbar is-mobile />
      </div>
      <div class="text-center mt-2">
        <div>+1 631 123 4567</div>
        <div class="mt-1">email@website.com</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
