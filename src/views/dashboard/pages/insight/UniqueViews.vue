<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Unique Views</h3>
    <template v-if="uniqueViewsLoading">
      <el-skeleton :rows="2" animated />
    </template>
    <template v-else>
      <div class="row">
        <div
            v-for="(label, key) in timeRanges"
            :key="key"
            class="col-md-4 col-sm-4 col-4"
        >
          <div class="views-data-wrap">
            <div class="views-data">
              {{ formatCount(uniqueViews?.[key]?.count) }}
            </div>

            <div
                :class="[
                'views-percentage',
                changeDirection(uniqueViews?.[key]?.change) === 'up'
                  ? 'text-success'
                  : 'text-danger'
              ]"
            >
              <i
                  :class="[
                  'houzez-icon',
                  changeDirection(uniqueViews?.[key]?.change) === 'up'
                    ? 'icon-arrow-button-up-2'
                    : 'icon-arrow-button-down-2'
                ]"
              ></i>
              {{ formatChange(uniqueViews?.[key]?.change) }}
            </div>

            <div class="views-text">
              {{ label }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  uniqueViews: {
    type: Object,
    required: true
  },
  uniqueViewsLoading: {
    type: Boolean,
    default: false
  }
});

const timeRanges = {
  last_24h: 'Last 24 Hours',
  last_7d: 'Last 7 Days',
  last_30d: 'Last 30 Days'
};

function formatCount(count) {
  if (typeof count !== 'number') return 0;
  if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
  return count;
}

function formatChange(change) {
  if (change === null || typeof change === 'undefined') return '0%';
  const prefix = change >= 0 ? '+' : '';
  return `${prefix}${change}%`;
}

function changeDirection(change) {
  if (change === null || typeof change === 'undefined') return 'down';
  return change >= 0 ? 'up' : 'down';
}
</script>
