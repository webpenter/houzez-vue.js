<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3>
      <i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
      {{$t('Deals')}}
    </h3>
    <template v-if="dealsLoading">
      <el-skeleton :rows="3" animated />
    </template>
    <template v-else>
      <div class="row">
        <div
            v-for="(item, index) in dealsSummary"
            :key="index"
            class="col-md-4 col-sm-4 col-4"
        >
          <div class="views-data-wrap">
            <div class="views-data">
              {{ formatCount(item.count) }}
            </div>
            <div
                class="views-percentage"
                :class="item.change >= 0 ? 'text-success' : 'text-danger'"
            >
              <i
                  class="houzez-icon"
                  :class="item.change >= 0 ? 'icon-arrow-button-up-2' : 'icon-arrow-button-down-2'"
              ></i>
              {{ item.change }}%
            </div>
            <div class="views-text">
              {{$t(item.label)}}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['deals', 'dealsLoading'])

const dealsSummary = computed(() => [
  {
    label: 'Last 24 Hours',
    count: props.deals?.last_24_hours?.count ?? 0,
    change: props.deals?.last_24_hours?.change ?? 0
  },
  {
    label: 'Last 7 Days',
    count: props.deals?.last_7_days?.count ?? 0,
    change: props.deals?.last_7_days?.change ?? 0
  },
  {
    label: 'Last 30 Days',
    count: props.deals?.last_30_days?.count ?? 0,
    change: props.deals?.last_30_days?.change ?? 0
  }
])

function formatCount(value) {
  if (value >= 1000) return (value / 1000).toFixed(1).replace('.0', '') + 'K'
  return value
}
</script>
