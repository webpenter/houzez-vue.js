<template>
  <div class="item-image">
    <img :src="thumbnail" alt="Property Image" />
  </div>
</template>

<script setup>
defineProps({
  thumbnail: String
});
</script>

<style scoped>
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* no cropping, but will leave blank space */
}</style>