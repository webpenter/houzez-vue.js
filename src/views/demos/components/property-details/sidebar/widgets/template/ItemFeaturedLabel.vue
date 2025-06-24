<template>
  <span
    v-if="is_featured"
    class="label-featured label"
  >
    Featured
  </span>
</template>

<script setup>
defineProps({
  is_featured: {
    type: Boolean,
    default: false
  }
});
</script>
