<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3>
      <i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
      Top Countries
    </h3>
    <template v-if="countriesStatsLoading">
      <el-skeleton :rows="2" animated />
    </template>
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
const props = defineProps(['countriesStats','countriesStatsLoading'])

// Optional: Format views like 1500 => 1.5k
function formatViews(views) {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M'
  if (views >= 1000) return (views / 1000).toFixed(1) + 'k'
  return views.toString()
}
</script>
