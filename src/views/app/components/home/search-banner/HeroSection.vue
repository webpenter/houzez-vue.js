<template>
  <section class="top-banner-wrap position-relative overflow-hidden vh-100">
    <div class="banner-inner position-absolute w-100 h-100" :style="{ backgroundImage: `url(${bannerImage})` }"></div>

    <div class="banner-caption text-white text-center position-relative z-2 pt-0">
      <h2 class="banner-title display-4 font-weight-bold mb-3">Welcome to Houzez 2.0</h2>
      <p class="banner-subtitle lead">WordPress Theme For Real Estate</p>
      <BannerSearch />
    </div>
  </section>
</template>

<script setup>
import BannerSearch from './BannerSearch.vue'

const props = defineProps({
  bannerImage: {
    type: String,
    default: '/src/assets/img/app-side/miami-beach-1.jpg'
  }
})
</script>
