<template>
  <div class="col-md-2" id="footer-useful-links">
    <h5>{{ $t('Useful Link')}}</h5>
    <ul>
      <li><RouterLink :to="{name:'app.properties'}">{{ $t('All Properties')}}</RouterLink></li>
      <li><RouterLink :to="{name:'app.about-us'}">{{ $t('Our Team')}}</RouterLink></li>
      <li><RouterLink :to="{name:'app.properties'}">{{ $t('Our Products')}}</RouterLink></li>
      <li><RouterLink :to="{name:'app.about-us'}">{{ $t('News & Blogs')}}</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>