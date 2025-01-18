<template>
  <div v-if="data">
    <span class="text-danger" v-for="(error,i) in data">{{error}}</span>
  </div>
</template>

<script setup>
defineProps({
  data: Array,
})
</script>