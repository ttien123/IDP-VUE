import { defineStore } from "pinia";

export const useGetSheet = defineStore("sheet", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
});
