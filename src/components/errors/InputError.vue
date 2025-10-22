<template>
  <div v-if="data">
    <span v-for="(error,i) in data" :key="i" class="text-danger">{{error}}</span>
  </div>
</template>

<script setup>
defineProps({
  data: Array,
})
</script>