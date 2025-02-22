<template>
  <div v-for="n in loop" :key="n" class="property-card-box skeleton">
    <div class="property-carousel">
      <div class="property-images skeleton-box"></div>
    </div>
    <div class="property-details-box">
      <p class="property-name skeleton-box"></p>
      <div class="property-price-detail">
        <div class="skeleton-box price-box"></div>
        <div class="rooms-baths-sqft">
          <span class="skeleton-box"></span>
          <span class="skeleton-box"></span>
          <span class="skeleton-box"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['loop']);
</script>

<style scoped>
.skeleton {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  animation: shimmer 1.5s infinite linear;
}

.skeleton-box {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
}

.property-images.skeleton-box {
  height: 300px;
}

.price-box.skeleton-box {
  width: 50%;
  height: 24px;
}

.rooms-baths-sqft .skeleton-box {
  width: 30px;
  height: 16px;
  display: inline-block;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>