<template>
  <div class="agent-profile-chart-wrap">
    <h2><span>Property</span> Cities</h2>
    <div class="d-flex align-items-center">
      <div class="agent-profile-chart">
        <canvas ref="citiesChartCanvas" width="100" height="100"></canvas>
      </div>

      <div class="agent-profile-data">
        <ul class="list-unstyled">
          <li class="stats-data-1">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>60%</strong> <span>Miami</span>
          </li>
          <li class="stats-data-2">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>20%</strong> <span>Los Angeles</span>
          </li>
          <li class="stats-data-3">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>15%</strong> <span>New York</span>
          </li>
          <li class="stats-data-4">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>5%</strong> <span>Other</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const citiesChartCanvas = ref(null);

onMounted(() => {
  const ctx = citiesChartCanvas.value.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [60, 20, 15, 5],
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
        }
      ]
    },
    options: {
      cutout: '60%', // Chart.js v3+
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
});
</script>
