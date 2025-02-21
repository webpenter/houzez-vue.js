<template>
  <template v-if="loading">
    <PropertiesCardSkeleton :loop="4"/>
  </template>
  <template v-else>
    <template v-for="property in properties" :key="property.id">
      <div class="property-card-box">
        <div class="property-carousel">
          <RouterLink :to="{name:'app.property-details',params:{propertyId:property.id}}">
            <div class="property-images">
              <img :src="property.thumbnail" alt="...">
            </div>
          </RouterLink>
        </div>
        <div class="property-details-box">
          <RouterLink :to="{name:'app.property-details',params:{propertyId:property.id}}">
            <p class="property-name">
              {{ $filters.subStr(property.title,0,60) }}
            </p>
          </RouterLink>
          <div class="property-price-detail">
            <div>{{ $filters.formatPrice(property.price) }}</div>
            <div class="rooms-baths-sqft">
              <p><i class="fa-light fa-bed"></i><span>{{ property.bedrooms }}</span></p>
              <p><i class="fa-light fa-shower"></i><span>{{ property.bathrooms }}</span></p>
              <p><i class="fa-light fa-ruler-triangle"></i><span>{{ property.area_size }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </template>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  properties:Object,
  loading: Boolean,
});
</script>

