<script setup lang="ts">
import logo from 'src/assets/img/logo-white-small.png'
</script>

<template>
  <div class="w-full h-full bg-bgMobileNav bg-no-repeat bg-cover bg-center relative py-10 px-8 flex items-center justify-center">
    <div class="bg-black absolute inset-0 opacity-70 z-0"></div>
    <div class="maxContent relative z-10">
      <div>
        <img :src="logo" alt="logo"  class="mx-auto"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
