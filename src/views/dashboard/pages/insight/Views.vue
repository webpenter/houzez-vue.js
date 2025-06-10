<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Views</h3>
    <template v-if="viewsLoading">
      <el-skeleton :rows="2" animated />
    </template>
    <template v-else>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-4">
          <div class="views-data-wrap">
            <div class="views-data">
              {{ views?.last_24_hours?.count ?? 0 }}
            </div>
            <div :class="['views-percentage', (views?.last_24_hours?.change ?? 0) >= 0 ? 'text-success' : 'text-danger']">
              <i :class="['houzez-icon', (views?.last_24_hours?.change ?? 0) >= 0 ? 'icon-arrow-button-up-2' : 'icon-arrow-button-down-2']"></i>
              {{ (views?.last_24_hours?.change ?? 0) >= 0 ? '+' : '' }}{{ views?.last_24_hours?.change ?? 0 }}%
            </div>
            <div class="views-text">
              Last 24 Hours
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-4">
          <div class="views-data-wrap">
            <div class="views-data">
              {{ views?.last_7_days?.count ?? 0 }}
            </div>
            <div :class="['views-percentage', (views?.last_7_days?.change ?? 0) >= 0 ? 'text-success' : 'text-danger']">
              <i :class="['houzez-icon', (views?.last_7_days?.change ?? 0) >= 0 ? 'icon-arrow-button-up-2' : 'icon-arrow-button-down-2']"></i>
              {{ (views?.last_7_days?.change ?? 0) >= 0 ? '+' : '' }}{{ views?.last_7_days?.change ?? 0 }}%
            </div>
            <div class="views-text">
              Last 7 Days
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-4">
          <div class="views-data-wrap">
            <div class="views-data">
              {{ views?.last_30_days?.count ?? 0 }}
            </div>
            <div :class="['views-percentage', (views?.last_30_days?.change ?? 0) >= 0 ? 'text-success' : 'text-danger']">
              <i :class="['houzez-icon', (views?.last_30_days?.change ?? 0) >= 0 ? 'icon-arrow-button-up-2' : 'icon-arrow-button-down-2']"></i>
              {{ (views?.last_30_days?.change ?? 0) >= 0 ? '+' : '' }}{{ views?.last_30_days?.change ?? 0 }}%
            </div>
            <div class="views-text">
              Last 30 Days
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  views: {
    type: Object,
    default: () => ({
      last_24_hours: { count: 0, change: 0 },
      last_7_days: { count: 0, change: 0 },
      last_30_days: { count: 0, change: 0 }
    })
  },
  viewsLoading:{
    type: Boolean,
  }
});
</script>
