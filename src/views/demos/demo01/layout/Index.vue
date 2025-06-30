<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import "@/assets/css/main-ltr.css"; /* Most important file for styling just for demo01 */
import { RouterView } from 'vue-router';
import Navbar from "@/views/demos/demo01/layout/navbar/Index.vue";
import Footer from "@/views/demos/demo01/layout/footer/Index.vue";
</script>