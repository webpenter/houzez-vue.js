<template>
    <div class="logo">
        <RouterLink :to="{name:'app.home'}">
            <img src="@/assets/img/logo-houzez-white.png" alt="logo">
        </RouterLink>
    </div><!-- .logo -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>