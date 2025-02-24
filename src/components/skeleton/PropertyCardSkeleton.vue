<template>
  <div v-for="n in loop" :key="n" class="property-card skeleton">
    <div class="property-image skeleton-box"></div>
    <div class="property-details">
      <div class="property-title skeleton-box"></div>
      <div class="property-location skeleton-box"></div>
      <div class="property-description skeleton-box"></div>
      <div class="property-features">
        <span class="skeleton-box"></span>
        <div class="line-y"></div>
        <span class="skeleton-box"></span>
        <div class="line-y"></div>
        <span class="skeleton-box"></span>
      </div>
      <div class="property-last-sec">
        <div class="property-price skeleton-box"></div>
        <button class="details-button skeleton-box"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['loop']);
</script>

<style scoped>
.skeleton {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
}

.skeleton-box {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
}

.property-image.skeleton-box {
  height: 150px;
  width: 100%;
}

.property-title.skeleton-box {
  width: 80%;
  height: 24px;
}

.property-location.skeleton-box,
.property-description.skeleton-box {
  width: 90%;
  height: 16px;
}

.property-features .skeleton-box {
  width: 30px;
  height: 16px;
}

.property-price.skeleton-box {
  width: 50%;
  height: 24px;
}

.details-button.skeleton-box {
  width: 80px;
  height: 30px;
  border-radius: 4px;
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