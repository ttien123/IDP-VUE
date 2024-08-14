<template>
    <div class="mb-2">
      <input v-model="value" :placeholder="placeholder" :type="type" :class="['w-full py-3 px-4 outline-none rounded-[4px] text-white bg-[#363636]', extendClassNameInput]"/>
      <div class="min-h-[21px] text-[14px] text-red-600">{{ errorMessage }}</div>
    </div>
</template>
<script setup lang="ts">
  import { useField } from 'vee-validate';
  interface Props {
    extendClassNameInput?: string;
    placeholder: string;
    name: string
    type: string
}
const props = defineProps<Props>()

  const { value, errorMessage } = useField(() => props.name, {
    validateOnValueUpdate: false,
  });
</script>
