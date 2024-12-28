<template>
	<div>
		<canvas ref="chartCanvas" width="500" height="350"></canvas>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';

// Create a reference for the canvas
const chartCanvas = ref(null);

onMounted(() => {
	// Access the canvas context using the ref
	const ctx = chartCanvas.value.getContext('2d');
	new Chart(ctx, {
		type: 'line',
		data: {
			labels: [
				'01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
				'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
				'21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
			],
			datasets: [
				{
					label: 'Visits',
					data: [
						120, 190, 100, 80, 20, 30, 50, 120, 190, 100,
						80, 20, 30, 50, 120, 190, 100, 80, 20, 30,
						50, 120, 190, 100, 60, 100, 100, 150, 150, 50
					],
					backgroundColor: 'rgba(255, 255, 255, 0)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 2,
				},
				{
					label: 'Unique',
					data: [
						100, 150, 150, 50, 70, 60, 100, 100, 150, 150,
						50, 70, 60, 100, 100, 150, 150, 50, 70, 60,
						100, 100, 150, 150, 150, 50, 70, 60, 100, 100
					],
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
						labelColor: function (tooltipItem) {
							return {
								borderColor: 'rgb(255, 99, 132)',
								backgroundColor: 'rgb(255, 99, 132)',
							};
						},
						labelTextColor: function () {
							return '#fff';
						},
					},
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					grid: {
						display: true,
					},
				},
				x: {
					grid: {
						display: false,
					},
				},
			},
		},
	});
});
</script>