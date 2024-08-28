<script setup lang="ts">
import logo from "src/assets/img/logo.png";
import Navbar from "../Navbar/Navbar.vue";
import BagIcon from "src/assets/icons/BagIcon.vue";
import UserIcon from "src/assets/icons/UserIcon.vue";
import path from "src/constants/path";
import imgProduct1 from "src/assets/img/item1.png";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import Button from "../Button/Button.vue";
import KeyIcon from "src/assets/icons/KeyIcon.vue";
import HandIcon from "src/assets/icons/HandIcon.vue";
import LockIcon from "src/assets/icons/LockIcon.vue";
import Sheet from "../Sheet/Sheet.vue";
import MenuIcon from "src/assets/icons/MenuIcon.vue";
import MobileNav from "../MobileNav/MobileNav.vue";

const listProductChoice = [
  {
    id: "0",
    url: imgProduct1,
    name: "Lamp Chops Handi",
    newPrice: "$229.9",
    oldPrice: "$229.9",
    qty: 1,
  },
  {
    id: "1",
    url: imgProduct1,
    name: "Lamp Chops Handi",
    newPrice: "$229.9",
    oldPrice: "$229.9",
    qty: 1,
  },
  {
    id: "2",
    url: imgProduct1,
    name: "Lamp Chops Handi",
    newPrice: "$229.9",
    oldPrice: "$229.9",
    qty: 1,
  },
];

</script>
<template>
  <div
    class="bg-bgHeader fixed top-0 left-0 right-0 z-50 shadow-shadowHeader"
  >
    <div class="maxContent flex items-center py-4">
      <button v-scroll-to="'#main'" class="w-1/4">
        <img :src="logo" alt="logo" />
      </button>
      <div class="flex-1">
        <div class="hidden lg:block"><Navbar /></div>
      </div>
      <div class="w-1/4 flex items-center justify-end gap-4">
        <Popover class="relative inline-block text-left">
          <div>
            <PopoverButton
              class="relative p-1 inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <BagIcon />
              <div
                class="absolute top-[-10px] right-[-10px] p-0 btnPrimary w-[20px] h-[20px] flex items-center justify-center !text-[12px] !rounded-[50%] !border-none"
              >
                4
              </div>
            </PopoverButton>
          </div>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute minicart right-[-128px] lg:right-[-12px] bg-black shadow-shadowDropdown w-[360px] pt-[35px] pb-[25px] px-[25px] mt-2 origin-top-right focus:outline-none"
            >
              <div class="h-[218px] mb-[32px] overflow-auto">
                <div
                  v-for="item of listProductChoice"
                  :key="item.id"
                  class="px-1 py-1"
                >
                  <div class="text-white flex items-center gap-4">
                    <div>
                      <img
                        :src="item.url"
                        :alt="item.name"
                        class="block w-[120px] h-[90px] object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="font-medium">{{ item.name }}</h4>
                      <div>
                        <span class="text-[14px] font-medium opacity-60 mr-2">{{
                          item.newPrice
                        }}</span>
                        <span>
                          <del
                            class="text-[14px] font-medium opacity-60 mr-2"
                            >{{ item.oldPrice }}</del
                          >
                        </span>
                      </div>
                      <div class="flex items-center gap-1">
                        <button class="text-[26px] p-1">-</button>
                        <input
                          type="text"
                          :value="item.qty"
                          class="block text-center outline-none w-[30px] h-[25px] bg-transparent border border-[#ddd] rounded"
                        />
                        <button class="p-1">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="border-t font-medium text-white border-t-white pt-[25px] text-[30px] text-center"
              >
                $239.9
              </div>
              <Button extend-class="text-white w-full mt-4">Checkout</Button>
            </PopoverPanel>
          </transition>
        </Popover>
        <Popover class="relative inline-block text-left">
          <div>
            <PopoverButton
              class="relative p-1 inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <UserIcon :width="50" />
              <ChevronDownIcon />
            </PopoverButton>
          </div>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-[-12px] bg-black shadow-shadowDropdown w-[230px] mt-2 origin-top-right focus:outline-none"
            >
              <div class="relative group cursor-pointer">
                <div
                  class="absolute z-10 inset-0 bg-bgPrimaryLinear opacity-0 group-hover:opacity-100 transition-all duration-500"
                ></div>
                <RouterLink
                  :to="path.login"
                  class="flex items-center bg-transparent h-[55px] px-[25px] py-[15px] group relative z-10 border-b-[#e9ecef1a] border-b-[0.5px]"
                >
                  <span
                    class="mr-4 mb-1 group-hover:mr-5 transition-all duration-500"
                  >
                    <KeyIcon />
                  </span>
                  <span class="text-[18px] font-light"> Login </span>
                </RouterLink>
              </div>
              <div class="relative group cursor-pointer">
                <div
                  class="absolute z-10 inset-0 bg-bgPrimaryLinear opacity-0 group-hover:opacity-100 transition-all duration-500"
                ></div>
                <RouterLink
                  :to="path.register"
                  class="flex items-center bg-transparent h-[55px] px-[25px] py-[15px] group relative z-10 border-b-[#e9ecef1a] border-b-[0.5px]"
                >
                  <span
                    class="mr-4 mb-1 group-hover:mr-5 transition-all duration-500"
                  >
                    <HandIcon />
                  </span>
                  <span class="text-[18px] font-light">Register</span>
                </RouterLink>
              </div>
              <div class="relative group cursor-pointer">
                <div
                  class="absolute z-10 inset-0 bg-bgPrimaryLinear opacity-0 group-hover:opacity-100 transition-all duration-500"
                ></div>
                <RouterLink
                  :to="path.login"
                  class="flex items-center bg-transparent h-[55px] px-[25px] py-[15px] group relative z-10 border-b-[#e9ecef1a] border-b-[0.5px]"
                >
                  <span
                    class="mr-4 mb-1 group-hover:mr-5 transition-all duration-500"
                  >
                    <UserIcon />
                  </span>
                  <span class="text-[18px] font-light">Account</span>
                </RouterLink>
              </div>
              <div class="relative group cursor-pointer">
                <div
                  class="absolute z-10 inset-0 bg-bgPrimaryLinear opacity-0 group-hover:opacity-100 transition-all duration-500"
                ></div>
                <RouterLink
                  :to="path.login"
                  class="flex items-center bg-transparent h-[55px] px-[25px] py-[15px] group relative z-10 border-b-[#e9ecef1a] border-b-[0.5px]"
                >
                  <span
                    class="mr-4 mb-1 group-hover:mr-5 transition-all duration-500"
                  >
                    <LockIcon />
                  </span>
                  <span class="text-[18px] font-light">Logout</span>
                </RouterLink>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <div class="lg:hidden">
          <Sheet>
            <template #btn>
              <MenuIcon :width="30" :height="30" />
            </template>
            <template #content>
              <MobileNav />
            </template>
          </Sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
