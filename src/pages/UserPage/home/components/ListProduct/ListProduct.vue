<script setup lang="ts">
import BrushIcon from "src/assets/icons/BrushIcon.vue";
import StarIcon from "src/assets/icons/StarIcon.vue";
import item1 from "src/assets/img/item1.png";
import item2 from "src/assets/img/item2.png";
import item3 from "src/assets/img/item3.png";
import item4 from "src/assets/img/item4.png";
import item5 from "src/assets/img/item5.png";
import item6 from "src/assets/img/item6.png";
interface Idata {
  src: string;
  name: string;
  description: string;
}

const data: Idata[] = [
  {
    src: item1,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
  {
    src: item2,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
  {
    src: item3,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
  {
    src: item4,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
  {
    src: item5,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
  {
    src: item6,
    name: "Mega Restaurant",
    description: "Curabitur mollis bibendum luctus.. ",
  },
];
</script>

<template>
  <section class="py-[120px] bg-[#191919]">
    <div class="maxContent">
      <div>
        <div
          class="textPrimary text-[20px] font-light mb-2 text-center lg:text-left"
        >
          Basic info about online food.
        </div>
        <div class="flex items-center justify-between flex-col lg:flex-row">
          <div class="lg:w-1/2 font-GrandH text-[72px] font-normal text-white">
            <div class="lg:w-[70%] text-center lg:text-left mb-4 lg:mb-0">
              delicious food is our aim.
            </div>
          </div>
          <div class="lg:w-1/2 grid grid-cols-3">
            <div>
              <div class="mb-3 text-center">
                <BrushIcon class="mx-auto" />
              </div>
              <div class="text-[24px] opacity-70 mb-3 text-center">1052+</div>
              <div class="text-[16px] opacity-70 text-center">
                Online Orders
              </div>
            </div>
            <div>
              <div class="mb-3 text-center">
                <BrushIcon class="mx-auto" />
              </div>
              <div class="text-[24px] opacity-70 mb-3 text-center">1052+</div>
              <div class="text-[16px] opacity-70 text-center">
                Online Orders
              </div>
            </div>
            <div>
              <div class="mb-3 text-center">
                <BrushIcon class="mx-auto" />
              </div>
              <div class="text-[24px] opacity-70 mb-3 text-center">1052+</div>
              <div class="text-[16px] opacity-70 text-center">
                Online Orders
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[120px]"
      >
        <div v-for="(item, index) in data" :key="index">
          <img :src="item.src" alt="image" class="block w-full" />
          <div class="flex items-center justify-between">
            <div class="text-[18px] my-2">
              {{ item.name }}
            </div>
            <div class="flex items-center justify-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div class="text-[16px] opacity-70">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
