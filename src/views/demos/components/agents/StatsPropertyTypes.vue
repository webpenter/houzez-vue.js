<template>
  <div class="agent-profile-chart-wrap">
    <h2><span>Property</span> Types</h2>
    <div class="d-flex align-items-center">
      <div class="agent-profile-chart">
        <canvas id="stats-property-types" width="100" height="100" ref="chartCanvas"></canvas>
      </div>

      <div class="agent-profile-data">
        <ul class="list-unstyled">
          <li class="stats-data-1">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>40%</strong>
            <span>Single Family Homes</span>
          </li>
          <li class="stats-data-2">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>30%</strong>
            <span>Apartments</span>
          </li>
          <li class="stats-data-3">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>20%</strong>
            <span>Villas</span>
          </li>
          <li class="stats-data-4">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>10%</strong>
            <span>Other</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required chart components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const chartCanvas = ref(null);

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 30, 20, 10],
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
      cutout: '60%', // replaces cutoutPercentage in Chart.js v3+
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
});
</script>
