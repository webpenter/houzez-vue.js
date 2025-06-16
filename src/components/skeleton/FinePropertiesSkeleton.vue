<template>
  <div class="item-listing-wrap card">
    <div class="item-wrap item-wrap-v1 item-wrap-no-frame h-100">
      <div class="d-flex align-items-center h-100">
        <div class="item-header">
          <div class="skeleton skeleton-label mb-2" style="width: 330px; height: 20px;"></div>
          <ul class="item-price-wrap hide-on-list mb-3">
            <li class="skeleton" style="width: 120px; height: 20px;"></li>
            <li class="skeleton" style="width: 100px; height: 18px;"></li>
          </ul>
          <ul class="item-tools item-tools-v2 mb-3">
            <li class="item-tool skeleton-icon"></li>
            <li class="item-tool skeleton-icon"></li>
            <li class="item-tool skeleton-icon"></li>
          </ul>
          <div class="hover-effect d-block position-relative">
            <div class="skeleton" style="width: 100%; height: 200px; border-radius: 6px;"></div>
          </div>
        </div>

        <div class="item-footer clearfix ps-3">
          <div class="item-author">
            <div class="skeleton" style="width: 80px; height: 16px;"></div>
          </div>
          <div class="item-date">
            <div class="skeleton" style="width: 60px; height: 16px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  border-radius: 4px;
}
.skeleton-label {
  display: inline-block;
}
.skeleton-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e6e6e6;
  animation: shimmer 1.4s ease infinite;
}
@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}
</style>
