<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Devices</h3>

    <!-- Show skeleton loader when data is loading -->
    <template v-if="props.devicesStatsLoading">
      <el-skeleton :rows="2" animated />
    </template>

    <!-- Show chart and data when data is loaded -->
    <template v-else>
      <div class="d-flex align-items-center sm-column">

        <div class="doughnut-chart-data flex-fill">
          <ul class="list-unstyled">
            <li class="stats-data-1">
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>Desktop</strong>
              <span>{{ formatNumber(props.devicesStats?.Desktop || 0) }} <small>Views</small></span>
            </li>
            <li class="stats-data-2">
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>Tablet</strong>
              <span>{{ formatNumber(props.devicesStats?.Tablet || 0) }} <small>Views</small></span>
            </li>
            <li class="stats-data-3">
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>Phone</strong>
              <span>{{ formatNumber(props.devicesStats?.Phone || 0) }} <small>Views</small></span>
            </li>
            <li class="stats-data-4">
              <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
              <strong>Others</strong>
              <span>{{ formatNumber(props.devicesStats?.Others || 0) }} <small>Views</small></span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const props = defineProps({
  devicesStats: {
    type: Object,
    required: true,
  },
  devicesStatsLoading: Boolean
});

const devicesdoughnutchart = ref(null);
let myDoughnutChart = null;

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

const renderChart = () => {
  const ctx = devicesdoughnutchart.value.getContext('2d');

  if (myDoughnutChart) {
    myDoughnutChart.destroy();
  }

  const data = props.devicesStats;

  myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Desktop', 'Tablet', 'Phone', 'Others'],
      datasets: [{
        data: [
          data?.Desktop || 0,
          data?.Tablet || 0,
          data?.Phone || 0,
          data?.Others || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      cutout: '60%',
      responsive: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });
};

onMounted(() => {
  if (!props.devicesStatsLoading && props.devicesStats && devicesdoughnutchart.value) {
    renderChart();
  }
});

watch([() => props.devicesStatsLoading, () => props.devicesStats], ([loading, stats]) => {
  if (!loading && stats && devicesdoughnutchart.value) {
    renderChart();
  }
});
</script>
