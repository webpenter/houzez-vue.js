<template>
  <template v-if="loading">
    <PackageCardSkeleton :loop="4"/>
  </template>
  <template v-else v-for="plan in selectPlans">
    <div class="col-md-3 col-sm-6">
      <div class="price-table-module">
        <div class="price-table-title">
          {{ plan.name }}
        </div><!-- price-table-title -->
        <div class="price-table-price-wrap">
          <div class="d-flex align-items-start justify-content-center">
            <span class="price-table-currency">{{ plan.currency_symbol }}</span>
            <h1 style="font-weight: bold">{{ plan.price }}</h1>
          </div><!-- d-flex -->
        </div><!-- price-table-price-wrap -->
        <div class="price-table-description">
          <ul class="list-unstyled">
            <li>
              <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i>
              Time Period: <strong>{{ plan.time_period }}</strong>
            </li>
            <li>
              <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i>
              Properties: <strong>{{ plan.properties }}</strong>
            </li>
            <li>
              <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i>
              Listing Images: <strong>{{ plan.images }}</strong>
            </li>
          </ul>
        </div><!-- price-table-description -->
        <div class="price-table-button">
          <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.checkout',params:{planId:plan.plan_id}}">
            Get Started
          </RouterLink>
        </div><!-- price-table-button -->
      </div><!-- taxonomy-grids-module -->
    </div>
  </template>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  selectPlans:Object,
  loading: Boolean,
})
</script>

<style scoped>
.skeleton-box {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
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
