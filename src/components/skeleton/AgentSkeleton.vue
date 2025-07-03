<template>
  <div class="container mt-4">
   

    <div class="row">
      <!-- Agent Image & Logo -->
      <div class="col-lg-4 col-md-8 col-sm-12 mb-3">
        <div class="skeleton-agent-image rounded"></div>
      </div>

      <!-- Agent Info -->
      <div class="col-lg-8 col-md-8 col-sm-12">
         <div class="skeleton-logo mb-3 rounded"></div>
        <div class="skeleton-text mb-3 w-50"></div> <!-- Agent Name -->
        <div class="skeleton-text mb-2 w-75"></div> <!-- Designation -->
        <div class="skeleton-text mb-2 w-100"></div> <!-- Line -->
        <div class="skeleton-text mb-2 w-100"></div>
        <div class="skeleton-text mb-2 w-100"></div>
        <div class="skeleton-text mb-2 w-75"></div> <!-- Final line -->

        <!-- Buttons -->
        <div class="d-flex gap-3 mt-4">
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
        </div>
      </div>
    </div>

    <!-- Agent Stats -->
    <div class="row mt-5">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="skeleton-box h-150 mb-3"></div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="skeleton-box h-150 mb-3"></div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="skeleton-box h-150 mb-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-header {
  width: 30%;
  height: 40px;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-logo {
  width: 100%;
  height: 80px;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
}

.skeleton-agent-image {
  width: 100%;
  height: 500px;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
}

.skeleton-text,
.skeleton-button,
.skeleton-box {
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-text {
  height: 40px;
  width: 100%;
}

.skeleton-button {
  height: 45px;
  width: 20%;
  background: #e0e0e0;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.d-flex {
  display: flex;

}

.gap-3 {
  gap: 1rem;
}

.skeleton-box {
  height: 150px;
  width: 100%;
}

.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
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
