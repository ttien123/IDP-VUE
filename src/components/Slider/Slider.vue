<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { listSlider } from 'src/mock/listSlider';

const modules = [Autoplay, Pagination];
</script>

<template>
    <section class="bg-bgSlider bg-fixed bg-no-repeat bg-cover relative min-h-[200px] bg-center">
        <div class="absolute inset-0 bg-[#202020e6]"></div>
        <div class="py-[120px]">
            <div class="max-w-[450px] mx-auto ">
                <swiper
                    :slidesPerView="3"
                    :pagination="{
                        clickable: true,
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :speed="800"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="slide in listSlider" :key="slide.id" class="w-[150px]">
                        <div class="min-h-[195px] relative">
                            <div class="text-center">
                                <img :src="slide.src" :alt="slide.name" class="imgMember block rounded-full mx-auto">
                            </div>
                            <div class="absolute z-10 hidden boxText">
                                <h3 class="textPrimary text-[25px] font-medium">
                                    {{ slide.name }}
                                </h3>
                                <div class="text-[14px] text-white">
                                    {{ slide.city }}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="max-w-[650px] pb-5 mb-8 mt-[12px] mx-auto text-[15px] text-white opacity-70 text-center">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra.”
                    </div>
                </swiper> 
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
    .imgMember {
        width: 84px;
        height: 84px;
        opacity: 80%;
        transition: all 0.8s ease;
    }
    .swiper-slide-next .imgMember{
        width: 120px;
        height: 120px;
        opacity: 100%;
    }
    .swiper-slide-next .boxText{
        display: block !important;
        width: 350px;
        margin-top: 12px;
        left:50%;
        transform: translateX(-50%);
        text-align: center;
    }
    .mySwiper .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
    }
    .mySwiper .swiper-pagination-bullet-active{
        width: 20px;
        height: 20px;
    }
</style>