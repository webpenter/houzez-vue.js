<template>
  <div class="agent-profile-chart-wrap">
    <h2><span>Property</span> Status</h2>
    <div class="d-flex align-items-center">
      <div class="agent-profile-chart">
        <canvas ref="statusChartCanvas" width="100" height="100"></canvas>
      </div>

      <div class="agent-profile-data">
        <ul class="list-unstyled">
          <li class="stats-data-1">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>65%</strong> <span>For Sale</span>
          </li>
          <li class="stats-data-2">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>35%</strong> <span>For Rent</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

// Ref to canvas
const statusChartCanvas = ref(null);

onMounted(() => {
  const ctx = statusChartCanvas.value.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [65, 35],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      cutout: '60%', // Replaces cutoutPercentage in v3+
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
});
</script>
