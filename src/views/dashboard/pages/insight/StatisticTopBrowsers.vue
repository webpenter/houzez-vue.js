<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Top Browsers</h3>

    <template v-if="browserStatsLoading">
      <el-skeleton :rows="2" animated />
    </template>

    <template v-else>
      <div class="d-flex align-items-center sm-column">
        <div class="doughnut-chart-data flex-fill">
          <ul class="list-unstyled">
            <li
                v-for="(stat, index) in browserStats"
                :key="stat.browser"
                :class="`stats-data-${index + 1}`"
            >
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>{{ stat.browser }}</strong>
              <span>{{ formatViews(stat.views) }} <small>Views</small></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps(['browserStats', 'browserStatsLoading']);

const formatViews = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.0', '') + 'k';
  }
  return num;
};
</script>
