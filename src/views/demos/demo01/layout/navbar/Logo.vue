<template>
  <div class="logo">
    <RouterLink :to="{ name: 'demo01.home' }">
      <!-- Dynamic logo -->
      <img v-if="logo" :src="logo" alt="logo" />

      <!-- Optional fallback -->
      <!-- <img v-else src="@/assets/img/app-side/logo-houzez-color.png" alt="default logo" /> -->
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useSetting } from "@/stores/index"; 
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const settingStore = useSetting();
const { logo } = storeToRefs(settingStore); // ✅ keeps reactivity
const { getLogo } = settingStore; // ✅ keep actions normal

onMounted(() => {
  getLogo();
});
</script>
