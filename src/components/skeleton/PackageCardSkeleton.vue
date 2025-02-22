<template>
  <div class="row">
    <div v-for="n in loop" :key="n" class="col-md-3 col-sm-6">
      <div class="card skeleton">
        <div class="card-img-top skeleton-box" style="height: 150px;"></div>
        <div class="card-body">
          <h5 class="card-title skeleton-box" style="width: 80%; height: 24px;"></h5>
          <p class="card-text skeleton-box" style="width: 90%; height: 16px;"></p>
          <p class="card-text skeleton-box" style="width: 90%; height: 16px;"></p>
          <div class="d-flex justify-content-between">
            <span class="skeleton-box" style="width: 30px; height: 16px;"></span>
            <span class="skeleton-box" style="width: 30px; height: 16px;"></span>
            <span class="skeleton-box" style="width: 30px; height: 16px;"></span>
          </div>
          <div class="mt-3 d-flex justify-content-between">
            <span class="skeleton-box" style="width: 50%; height: 24px;"></span>
            <button class="btn skeleton-box" style="width: 80px; height: 30px;"></button>
          </div>
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