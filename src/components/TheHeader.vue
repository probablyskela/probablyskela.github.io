<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
<header class="header">
    <nav>
        <RouterLink to="/" class="probablyskela">probablyskela</RouterLink>
        <span>|</span>
        <RouterLink to="/">Blog</RouterLink>
        <span>|</span>
        <RouterLink to="/">Projects</RouterLink>
    </nav>

    <a href="#">Log in via GitHub</a>

    <!-- <a href="https://github.com/probablyskela" target="_blank" class="github"></a> -->
</header>
</template>

<style lang="scss">
.header {
    z-index: 9999;

    width: 100%;
    height: $header-height;

    box-sizing: border-box;
    padding: 0 50px;

    background-color: $dark-main;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        font-weight: 100;     
    }

    nav {
        display: flex;
        align-items: center;

        gap: 20px;

        .probablyskela {
            font-size: 20px;
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