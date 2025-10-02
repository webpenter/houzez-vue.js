<template>
  <div class="logo">
    <RouterLink :to="{ name: 'demo01.home' }">
      <!-- Show store logo if loaded, otherwise fallback -->
      <img 
        :src="setting.logo || defaultLogo" 
        alt="logo" 
      >
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useSetting } from "@/stores/index.js"; 
import { onMounted } from "vue";

// store instance
const setting = useSetting();

// fallback logo

// fetch logo on mount (only if not already initialized)
onMounted(async () => {
  if (!setting.initialized) {
    try {
      await setting.getLogo();
      setting.initialized = true; // ✅ prevent multiple calls
    } catch (err) {
      console.error("Failed to fetch logo:", err);
    }
  }
});
</script>
