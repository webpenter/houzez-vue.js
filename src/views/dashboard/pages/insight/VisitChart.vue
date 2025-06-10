<template>
  <div class="dashboard-content-block dashboard-statistic-block">
    <h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Visits</h3>

    <template v-if="visitChartLoading">
      <el-skeleton :rows="8" animated />
    </template>

    <template v-else>
      <div>
        <canvas ref="chartCanvas" width="500" height="350"></canvas>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { Chart } from 'chart.js/auto';

const chartCanvas = ref(null);
let chartInstance = null;

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  visitChartLoading: {
    type: Boolean,
    default: true,
  },
});

const createChart = () => {
  if (!chartCanvas.value || !Array.isArray(props.data) || props.data.length === 0) return;

  const ctx = chartCanvas.value.getContext('2d');
  const labels = props.data.map(item => item.date);
  const visitsData = props.data.map(item => item.visits);
  const uniqueData = props.data.map(item => item.unique);

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Visits',
          data: visitsData,
          backgroundColor: 'rgba(255, 255, 255, 0)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
        },
        {
          label: 'Unique',
          data: uniqueData,
          backgroundColor: 'rgba(255, 255, 255, 0)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 12,
          },
        },
        tooltip: {
          callbacks: {
            labelColor: () => ({
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
            }),
            labelTextColor: () => '#fff',
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { display: true },
        },
        x: {
          grid: { display: false },
        },
      },
    },
  });
};

watch(
    () => props.visitChartLoading,
    (loading) => {
      if (!loading) {
        nextTick(() => {
          createChart();
        });
      }
    }
);

watch(
    () => props.data,
    () => {
      nextTick(() => {
        createChart();
      });
    },
    { deep: true }
);
</script>

