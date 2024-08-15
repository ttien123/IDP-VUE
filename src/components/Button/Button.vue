<script setup lang="ts">
interface Props {
    extendClass?: string;
}
const {extendClass} = defineProps<Props>()
</script>

<template>
    <button :class="['btnPrimary', extendClass]">
        <slot />
    </button>
</template>


<style lang="scss" scoped>

</style>