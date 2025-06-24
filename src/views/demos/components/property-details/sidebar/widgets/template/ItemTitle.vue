<template>
  <h2 class="item-title">
    <router-link :to="{ name: 'demo01.property-details', params: { propertySlug: slug } }">
      {{ title }}
    </router-link>
  </h2>
</template>

<script setup>
defineProps({
  title: String,
  slug: String
});
</script>
