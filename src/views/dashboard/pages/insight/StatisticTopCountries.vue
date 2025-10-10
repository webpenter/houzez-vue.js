<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3>
      <i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
      Top Countries
    </h3>

    <!-- Skeleton loader while loading -->
    <template v-if="countriesStatsLoading">
      <el-skeleton :rows="2" animated />
    </template>

    <!-- Display country stats -->
    <template v-else>
      <div class="d-flex align-items-center sm-column">
        <div class="doughnut-chart-data flex-fill">
          <ul class="list-unstyled">
            <li
              v-for="(item, index) in countriesStats.top_countries"
              :key="index"
              :class="`stats-data-${index + 1}`"
            >
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>{{ item.country }}</strong>
              <span>{{ formatViews(item.views) }} <small>Views</small></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
/**
 * Props
 * - countriesStats: Object containing top countries data
 * - countriesStatsLoading: Boolean to indicate loading state
 */
defineProps({
  countriesStats: {
    type: Object,
    required: true
  },
  countriesStatsLoading: {
    type: Boolean,
    default: false
  }
});

/**
 * Format number of views
 * 1500 -> 1.5k, 1500000 -> 1.5M
 * @param {number} views
 * @returns {string}
 */
function formatViews(views) {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M';
  if (views >= 1000) return (views / 1000).toFixed(1) + 'k';
  return views.toString();
}
</script>
