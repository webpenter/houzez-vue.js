<template>
    <div class="logo">
        <RouterLink :to="{ name: 'demo01.home' }">
            <img src="@/assets/img/app-side/logo-houzez-color.png" alt="logo" />
        </RouterLink>
    </div><!-- .logo -->
    
</template>


  <script setup>
  import {RouterLink} from "vue-router";
  </script>