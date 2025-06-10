<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3>
      <i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
      Top Platforms
    </h3>

    <template v-if="platformStatsLoading">
      <el-skeleton :rows="2" animated />
    </template>

    <template v-else>
      <div class="d-flex align-items-center sm-column">
        <div class="doughnut-chart-data flex-fill">
          <ul class="list-unstyled">
            <li
                v-for="(views, name, index) in platformStats"
                :key="index"
                :class="`stats-data-${index + 1}`"
            >
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>{{ name }}</strong>
              <span>{{ formatViews(views) }} <small>Views</small></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  platformStats: {
    type: Object,
    required: true
  },
  platformStatsLoading: {
    type: Boolean,
    default: false
  }
})

const formatViews = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k'
  }
  return count
}
</script>
