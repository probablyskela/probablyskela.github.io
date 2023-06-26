<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    fontsize: number,
    fontweight: number,
    texts: [string] 
}

const props = defineProps<Props>();
const text = ref('');
</script>

<template>

</template>

<style lang="scss">
</style>