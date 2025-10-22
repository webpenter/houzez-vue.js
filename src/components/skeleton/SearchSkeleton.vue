<template>
  <div class="search-page">
    <!-- Left Map -->
    <div class="map-area">
      <div class="skeleton-map"></div>
    </div>

    <!-- Right Property List with Filters and Cards -->
    <div class="property-list">
      
      <!-- Top Search Bar + Filter Inputs -->
      <div class="search-header">
        <div class="search-inputs">
          <div class="skeleton-input full-width"></div>
          <div class="skeleton-inputs-row">
            <div v-for="i in 4" :key="i" class="skeleton-input small"></div>
          </div>
          <div class="skeleton-btn-row">
            <div v-for="i in 3" :key="i" class="skeleton-input small"></div>
          </div>
        </div>
        
      </div>

      <!-- Property Card Skeleton -->
      <div v-for="n in 3" :key="n" class="property-skeleton-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton-badge"></div>
          <div class="skeleton-title"></div>
          <div class="skeleton-line short"></div>
          <div class="skeleton-icons">
            <div v-for="i in 5" :key="i" class="skeleton-icon"></div>
          </div>
          <div class="skeleton-footer">
            <div class="skeleton-price"></div>
            <div class="skeleton-button"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
/* Page Layout */
.search-page {
  display: flex;
  gap: 20px;
  padding: 20px;
}

/* Map Area */
.map-area {
  width: 40%;
}
.skeleton-map {
  width: 100%;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 10px;
  animation: pulse 1.5s infinite;
}

/* Right Side: Properties */
.property-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Search Header */
.search-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/* Left Inputs */
.search-inputs {
  flex: 1;
}
.skeleton-input.full-width {
  height: 40px;
  background: #e0e0e0;
  margin-bottom: 10px;
  border-radius: 6px;
  animation: pulse 1.5s infinite;
}
.skeleton-inputs-row {
  display: flex;
  gap: 10px;
}
.skeleton-input.small {
  flex: 1;
  height: 40px;
  background: #e0e0e0;
  border-radius: 6px;
  animation: pulse 1.5s infinite;
}

/* Right Buttons */
.search-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skeleton-button-filter {
  width: 120px;
  height: 40px;
  background: #d0d0d0;
  border-radius: 6px;
  animation: pulse 1.5s infinite;
}
.skeleton-button-clear {
  width: 60px;
  height: 30px;
  background: #ccc;
  border-radius: 6px;
  animation: pulse 1.5s infinite;
}

/* Property Card */
.property-skeleton-card {
  display: flex;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  padding: 16px;
  gap: 16px;
  animation: pulse 1.5s infinite;
}

.skeleton-image {
  width: 220px;
  height: 120px;
  background-color: #ccc;
  border-radius: 8px;
}

.skeleton-content {
  flex: 1;
}

.skeleton-badge {
  width: 90px;
  height: 20px;
  background: #bbb;
  border-radius: 5px;
  margin-bottom: 10px;
}

.skeleton-title {
  width: 60%;
  height: 16px;
  background-color: #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}

.skeleton-line {
  height: 12px;
  background-color: #ddd;
  margin-bottom: 6px;
  border-radius: 4px;
}

.skeleton-line.short {
  width: 40%;
}

.skeleton-icons {
  display: flex;
  gap: 8px;
  margin: 10px 0;
}
.skeleton-icon {
  width: 20px;
  height: 20px;
  background: #bbb;
  border-radius: 50%;
}

.skeleton-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skeleton-price {
  width: 100px;
  height: 16px;
  background: #bbb;
  border-radius: 4px;
}

.skeleton-button {
  width: 80px;
  height: 30px;
  background: #ccc;
  border-radius: 6px;
}

.skeleton-btn-row {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.skeleton-btn-row .skeleton-input.small {
  width: 120px; /* or adjust to match real button widths */
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 6px;
  animation: pulse 1.5s infinite;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
}
</style>
