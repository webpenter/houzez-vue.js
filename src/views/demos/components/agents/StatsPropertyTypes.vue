<template>
  <div class="agent-profile-chart-wrap">
    <h2><span>Property</span> Types</h2>
    <div class="d-flex align-items-center">
      <div class="agent-profile-chart">
        <canvas id="stats-property-types" width="100" height="100" ref="chartCanvas"></canvas>
      </div>

      <div class="agent-profile-data">
        <ul class="list-unstyled">
          <li 
          v-for="(type, index) in types" 
          :key="index"
          :class="'stats-data-' + (index + 1)"
          >
            <i class="houzez-icon icon-sign-badge-circle mr-1"></i>
            <strong class="mr-1">{{ type.percentage }}%</strong>
            <span>{{ $filters.capitalize(type.type) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'

const props = defineProps(['types'])

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const chartCanvas = ref(null)

const backgroundColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)'
]

const borderColors = backgroundColors.map(color => color.replace('0.5', '1'))

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  const percentages = props.types.map(item => item.percentage)

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: percentages,
        backgroundColor: backgroundColors.slice(0, percentages.length),
        borderColor: borderColors.slice(0, percentages.length),
        borderWidth: 1
      }]
    },
    options: {
      cutout: '60%',
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  })
})
</script>

