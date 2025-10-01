<script setup>
import { RouterView } from "vue-router";
import "leaflet/dist/leaflet.css";

import { useSetting } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const settingStore = useSetting();
const { initialized } = storeToRefs(settingStore);

onMounted(async () => {
  // ✅ Initial API calls (logo, banner, social links are )
  await settingStore.initSettings();
});
</script>

<template>
  <!-- ✅ Show loader until settings are fetched -->
  <!-- <div v-if="!initialized" class="app-loader">
    <div class="spinner"></div>
  </div> -->

  <!-- ✅ Show app only when initialized -->
  <div >
    <RouterView />
  </div>
</template>

<style scoped>
.app-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 9999;
  overflow: hidden;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #eee;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  position: relative;
  flex-shrink: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.app-loader * {
  box-sizing: border-box;
}

body:has(.app-loader) {
  overflow: hidden;
}
</style>