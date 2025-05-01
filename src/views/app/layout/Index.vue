<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from "@/views/app/layout/navbar/Index.vue";
import Footer from "@/views/app/layout/footer/Index.vue";
</script>