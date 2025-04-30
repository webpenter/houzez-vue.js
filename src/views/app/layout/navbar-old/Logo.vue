<template>
  <div class="logo">
    <RouterLink :to="{ name: 'app' }">
      <img src="@/assets/img/client-side/logo (1).png" alt="" />
    </RouterLink>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>