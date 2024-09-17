<script setup lang="ts">
import Parallax from "parallax-js";
import { onMounted } from "vue";
import imgEle1 from 'src/assets/img/slider-ele1.png'
import imgEle3 from 'src/assets/img/slider-ele3.png'
import imgEle5 from 'src/assets/img/slider-ele5.png'
import imgEle4 from 'src/assets/img/slider-ele4.png'

onMounted(() => {
  // const scene = document.getElementById("scene") as HTMLElement;
  // new Parallax(scene);
});
</script>

<template>
  <section class="h-screen flex items-center justify-center pt-[75px] relative">
    <div class="hidden lg:block absolute top-[25%] left-[2%] 2xl:left-[10%]">
      <img :src="imgEle1" alt="img">
    </div>
    <div class="hidden lg:block absolute top-[68%] left-0 w-[199px] h-[270px]">
      <img :src="imgEle4" alt="img">
    </div>
    <div class="w-[580px] mt-[-200px]">
      <div class="w-[470px] m-auto text-center">
        <div class="text-[18px] font-light opacity-70 mb-10 test-transition">Lorem ipsum dolor sit amet purus.</div>
        <h1 class="text-[75px] font-GrandH font-normal leading-[85px] mb-12">Delicious food at your door step.</h1>
      </div>
      <p class="text-[15px] opacity-70 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna.</p>
    </div>
    <div class="hidden lg:block absolute top-[26%] -right-[15%] 2xl:-right-[2%] w-[545px] h-[498px]">
      <img :src="imgEle5" alt="img">
    </div>
    <div class="hidden lg:block absolute top-[28%] -right-[15%] 2xl:-right-[10%] w-[545px] h-[498px]">
      <img :src="imgEle3" alt="img">
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
