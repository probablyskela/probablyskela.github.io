<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="header">
    <nav>
        <!-- <span>|</span> -->
        <RouterLink to="/" class="probablyskela">probablyskela</RouterLink>
        <span>|</span>
        <ul>

        </ul>
    </nav>

    <a href="https://github.com/probablyskela" target="_blank" class="github"></a>
</div>
</template>

<style lang="scss">
.header {
    z-index: 9999;

    width: 100%;
    height: $header-height;

    box-sizing: border-box;
    padding: 0 100px;

    background-color: $dark-main;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;


    nav {
        display: flex;
        align-items: center;

        gap: 20px;

        .probablyskela {
            text-decoration: none;
            letter-spacing: 3px;
            font-size: 20px;
            font-weight: 100;     
        }
    }

    .github {
        box-sizing: border-box;
        background-image: url("../../public/images/github.png");
        background-size: cover;

        width: 40px;
        height: 40px;
    }
}
</style>