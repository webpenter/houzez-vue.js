<template>
  <RouterLink :to="{name:'dashboard'}">
    <div class="btn-group position-relative create-listing-btn-mobile">
      <p class="btn-sm py-1 px-2 bg-none m-0">{{ $t('Create Listing') }}</p><i class="fa-solid fa-arrow-right"></i>
    </div>
  </RouterLink>
</template>
<script setup>
import {RouterLink} from "vue-router";
</script>