<template>
    <section class="top-banner-wrap position-relative overflow-hidden" style="height: 600px;">
      <!-- Banner background image -->
      <div
        class="banner-inner position-absolute w-100 h-100"
        style="background-image: url('/src/assets/img/app-side/miami-beach-1.jpg'); background-size: cover; background-position: center; z-index: 1;">
      </div>
  
      <!-- Banner content -->
      <div class="banner-caption text-white text-center position-relative" style="z-index: 2; padding-top: 0px;">
        <h2 class="banner-title display-4 font-weight-bold mb-3">Welcome to Houzez 2.0</h2>
        <p class="banner-subtitle lead">WordPress Theme For Real Estate</p>
  
        <!-- Search Component -->
        <BannerSearch />
      </div>
    </section>
  </template>
  
  <script setup>
  import BannerSearch from './BannerSearch.vue';
  </script>