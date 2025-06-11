<template>
  <div class="hero-section-container">
    <div class="text-section">
      <p>{{$t('Dont miss out')}}</p>
      <h1>{{$t('The Most Peaceful Vacation Stops')}}</h1>
      <p>{{ $t('Hero Description') }}</p>
      <RouterLink :to="{name: 'app.properties'}">
        <button>{{ $t('Go to Rentals') }}</button>
      </RouterLink>
    </div>
    <div class="img-section">
      <img src="@/assets/img/client-side/hero-section-img.png" alt="" width="100%" height="100%">
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>