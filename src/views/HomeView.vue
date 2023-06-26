<script setup lang="ts">
</script>

<template>
<section class="home">
    <h1 class="home_hello">Hello, World!</h1>
</section>
</template>

<style lang="scss">
.home {
    @include base-section;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .home_hello {
        font-size: 90px;
    }
}
</style>