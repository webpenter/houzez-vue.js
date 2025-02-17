<template>
  <div>
    <h1>Search Results</h1>
    <div v-if="searchedAndFilteredProperties.length">
      <div v-for="property in searchedAndFilteredProperties" :key="property.id" class="property-card">
        <h2>{{ property.title }}</h2>
        <p>{{ property.city }} - {{ property.bedrooms }} bedrooms - ${{ property.price }}</p>
      </div>
    </div>
    <div v-else>
      <p>No properties found matching your search criteria.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAppProperty } from '@/stores/index.js';
import { onMounted } from 'vue';

const route = useRoute();
const propertyToRefs = useAppProperty();
const { searchedAndFilteredProperties } = storeToRefs(propertyToRefs);

onMounted(async () => {
  await propertyToRefs.getSearchedAndFilteredProperties({
    search: route.query.search || '',
    types: route.query.types ? route.query.types.split(',') : [],
    city: route.query.city || '',
    bedrooms: route.query.bedrooms || '',
    maxPrice: route.query.maxPrice || ''
  });
});
</script>

<style scoped>
.property-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
}
</style>