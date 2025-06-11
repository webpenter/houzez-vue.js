<template>
  <div class="footer-bottom">
    <p>{{ $t('Copyright') }} © {{ currentYear }}, {{ $t('All rights reserved') }}.</p>
    <div>
      <RouterLink :to="{name:'app.about-us'}">{{ $t('Meat Our Awesome Team')}}</RouterLink>
      <RouterLink :to="{name:'app.about-us'}">{{ $t('About Us')}}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();
</script>
