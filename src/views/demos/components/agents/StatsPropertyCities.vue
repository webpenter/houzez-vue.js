<template>
  <div class="agent-profile-chart-wrap">
    <h2><span>Property</span> Cities</h2>
    <div class="d-flex align-items-center">
      <div class="agent-profile-chart">
        <canvas ref="citiesChartCanvas" width="100" height="100"></canvas>
      </div>
      <div class="agent-profile-data">
        <ul class="list-unstyled">
          <li v-for="(city,index) in  cities" :key="index" :class="'stats-data-' + (index + 1)">
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong>{{ city.percentage }}%</strong> <span>{{ city.city }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

const props = defineProps(['cities'])

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const citiesChartCanvas = ref(null);

// Default fallback colors
const backgroundColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)'
]

const borderColors = backgroundColors.map(c => c.replace('0.5', '1'))

onMounted(() => {
  const ctx = citiesChartCanvas.value.getContext('2d');

  const percentages = props.cities.map(c => c.percentage);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: percentages,
          backgroundColor: backgroundColors.slice(0, percentages.length),
          borderColor: borderColors.slice(0, percentages.length),
          borderWidth: 1
        }
      ]
    },
    options: {
      cutout: '60%',
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
});
</script>

