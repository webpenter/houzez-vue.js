<template>
  <RouterLink
    v-if="button"
    class="fancy"
    :to="{ name: button.path }"
    :style="{
      color: button.text_color || '#000000',
      backgroundColor: button.bg_color || '#ffffff',
      '--primary-color': button.hover_color || '#cccccc'
    }"
  >
    <span class="top-key"></span>
    <span class="text">{{ button.name }}</span>
    <span class="bottom-key-1"></span>
    <span class="bottom-key-2"></span>
  </RouterLink>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const button = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/navbar/buttons`)
    if (res.data.length > 0) {
      button.value = res.data[0]
      console.log('Fetched navbar button:\n', JSON.stringify(button.value, null, 2))
    }
  } catch (error) {
    console.error('Failed to load navbar button:', error)
  }
})
</script>