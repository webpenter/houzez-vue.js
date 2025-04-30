<template>
    <div class="logo">
        <RouterLink :to="{ name: 'app' }">
            <img src="@/assets/img/app-side/logo-houzez-color.png" alt="logo" />
        </RouterLink>
    </div><!-- .logo -->
    
</template>


  <script setup>
  import {RouterLink} from "vue-router";
  </script>