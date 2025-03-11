<template>
  <RouterLink class="fancy" :to="{name:'dashboard'}">
    <span class="top-key"></span>
    <span class="text">{{ $t('Create Listing') }}</span>
    <span class="bottom-key-1"></span>
    <span class="bottom-key-2"></span>
  </RouterLink>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>