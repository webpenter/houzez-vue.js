<template>
  <div class="logo">
    <RouterLink :to="{ name: 'app' }">
      <img
        v-if="setting.logo"
        :src="setting.logo"
        alt="App Logo"
        class="h-12 w-auto"
      />
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useSetting } from "@/stores/index"; 

const setting = useSetting();

onMounted(() => {
  setting.getLogo(); 
});
</script>
