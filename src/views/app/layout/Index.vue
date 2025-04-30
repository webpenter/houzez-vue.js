<template>
  <Navbar />
  <RouterView />
  bye
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from "@/views/app/layout/navbar/Index.vue";
</script>