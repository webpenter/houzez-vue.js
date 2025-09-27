<template>
  <div v-if="results.length" class="auto-complete auto-complete-keyword" style="display: block; margin-top: 387px;">
    <ul class="list-group">
      <li v-for="property in results" :key="property.id" class="list-group-item">
        <div class="d-flex align-items-center">
          <div class="auto-complete-image-wrap">
            <RouterLink :to="{ name: 'demo01.property-details', params: { propertySlug: property.slug } }">
              <img 
              class="img-fluid rounded" :src="getThumbnail(property)"
                :style="hasThumbnail(property) ? 'width: 50px; height: 40px; object-fit: cover;' : ''" alt="image">
            </RouterLink> 
          </div>
          <div class="auto-complete-content-wrap ml-3">
            <div class="auto-complete-title">
              <RouterLink :to="{ name: 'demo01.property-details', params: { propertySlug: property.slug } }">
                {{ property.title }}
              </RouterLink>
            </div>
            <ul class="item-amenities item-amenities-with-icons">
              <li><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>Beds: {{ property.bedrooms }}</li>
              <li><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>Baths: {{ property.bathrooms }}</li>
              <li><i class="houzez-icon icon-car-1 mr-1"></i>Parkings: {{ property.garages }}</li>
              <li><i class="houzez-icon icon-ruler-triangle mr-1"></i>{{ property.area_size }} Sq Ft</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="auto-complete-footer">
      <i class="houzez-icon icon-pin mr-1"></i>
      <span class="auto-complete-count">
        {{ results.length }} Listings
      </span>
      <a target="_blank" href="#" class="search-result-view">View All Results</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  results: { type: Array, default: () => [] }
});

function getThumbnail(property) {
  return property.images?.find?.(img => img.is_thumbnail === 1)?.image_path || 'https://placehold.co/40x40';
}

function hasThumbnail(property) {
  return !!property.images?.find?.(img => img.is_thumbnail === 1);
}
</script>
