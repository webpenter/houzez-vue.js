<template>
  <div class="property-card">
    <div class="property-image-container">
      <div v-if="!isLoaded" class="property-image property-image-load"></div>
      <img
          v-show="isLoaded"
          :src="property.thumbnail"
          :alt="property.title"
          class="property-image"
          @load="imageLoaded"
      >
    </div>

    <div class="property-details">
      <div class="property-title">
        {{ $filters.subStr($filters.capitalize(property.title), 0, 30) }}
      </div>
      <div class="property-location">
        <i class="fas fa-map-marker-alt"></i>
        {{ $filters.subStr(property.address, 0, 40) }}
      </div>
      <div class="property-description">
        {{ $filters.subStr(property.description, 0, 60) }}
      </div>
      <div class="property-features">
        <span><i class="fas fa-bed"></i><p> Bed {{ property.bedrooms }}</p></span>
        <div class="line-y"></div>
        <span><i class="fas fa-bath"></i> <p>Bath {{ property.bathrooms }}</p></span>
        <div class="line-y"></div>
        <span><i class="fas fa-ruler-combined"></i> <p>{{ property.area_size }} sqft</p></span>
      </div>
      <div class="property-last-sec">
        <div class="property-price">
          {{ $filters.formatPrice(property.price) }}
        </div>
        <RouterLink :to="{name:'app.property-details',params:{propertySlug:property.slug}}" class="details-button">
          {{ $t('Details') }} <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  property: Object,
});

const isLoaded = ref(false);

const imageLoaded = () => {
  isLoaded.value = true;
};
</script>

<style scoped>
.property-image-container {
  position: relative;
  width: 255px;
  height: 250px;
  border-radius: 10px;
}

.property-image {
  width: 257px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.property-image-load {
  background-color: #f0f0f0;
  width: 375px;
  height: 250px;
  border-radius: 10px;
}
</style>
