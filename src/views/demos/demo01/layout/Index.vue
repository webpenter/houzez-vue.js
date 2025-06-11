<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from "@/views/demos/demo01/layout/navbar/Index.vue";
import Footer from "@/views/demos/demo01/layout/footer/Index.vue";
</script>