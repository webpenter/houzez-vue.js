<template>
  <div class="container mt-4">
    <!-- Top Lines (Skeleton Header) -->
    <div class="skeleton-header-full mb-3"></div>
    <div class="skeleton-header-full mb-3"></div>

    <div class="row">
      <!-- Left Side (Image Loader) -->
      <div class="col-md-8">
        <div class="skeleton-image-large rounded"></div>
      </div>

      <!-- Right Side (Form Loader) -->
      <div class="col-md-4">
        <div class="skeleton-banner mb-3"></div>
        <div class="skeleton-text mb-2"></div>
        <div class="skeleton-radio mb-2"></div>
        <div class="skeleton-radio mb-2"></div>
        <div class="skeleton-input mb-2"></div>
        <div class="skeleton-input mb-2"></div>
        <div class="skeleton-input mb-2"></div>
        <div class="skeleton-textarea mb-3"></div>
        <div class="skeleton-button"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-header-full {
  width: 100%;
  height: 40px;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-image-large {
  width: 100%;
  height: 600px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

.skeleton-banner {
  width: 100%;
  height: 120px;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
}

.skeleton-text, .skeleton-radio, .skeleton-input, .skeleton-textarea, .skeleton-button {
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-text {
  width: 50%;
  height: 20px;
}

.skeleton-radio {
  width: 30%;
  height: 20px;
}

.skeleton-input {
  width: 100%;
  height: 40px;
}

.skeleton-textarea {
  width: 100%;
  height: 80px;
}

.skeleton-button {
  width: 100%;
  height: 50px;
}

@keyframes skeleton-loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
