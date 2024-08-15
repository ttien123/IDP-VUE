<script setup lang="ts">
import path from 'src/constants/path';


</script>

<template>
    <div>
        Home
        <RouterLink :to="path.login" class="block font-medium text-[16px] mt-4 lg:mt-0  text-white opacity-70">Not Registered Yet?</RouterLink>
    </div>
</template>

<style lang="scss" scoped>

</style>