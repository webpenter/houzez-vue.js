<template>
	<div>
	  <canvas ref="visitsChart" width="500" height="350"></canvas>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  // Create a ref for the canvas element
  const visitsChart = ref(null);
  
  onMounted(() => {
	const ctx = visitsChart.value.getContext('2d'); // Access the canvas element
	new Chart(ctx, {
	  type: 'line',
	  data: {
		labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
		datasets: [
		  {
			label: 'Visits',
			data: [120, 190, 100, 80, 20, 30, 50, 120, 190, 100, 80, 20, 30, 50, 120, 190, 100, 80, 20, 30, 50, 120, 190, 100],
			backgroundColor: 'rgba(255, 255, 255, 0)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 2,
		  },
		  {
			label: 'Unique',
			data: [100, 150, 150, 50, 70, 60, 100, 100, 150, 150, 50, 70, 60, 100, 100, 150, 150, 50, 70, 60, 100, 100, 150, 150],
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
		tooltips: {
		  callbacks: {
			labelColor: function (tooltipItem, chart) {
			  return {
				borderColor: 'rgb(255, 99, 132, 1)',
				backgroundColor: 'rgb(255, 99, 132, 1)',
			  };
			},
			labelTextColor: function (tooltipItem, chart) {
			  return '#fff';
			},
		  },
		},
	  },
	});
  });
  </script>