<template>
	<div class="dashboard-content-block dashboard-statistic-block">
	  <h3>
		<i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
		Most Favorites
	  </h3>
	  <div class="chart-nav">
		<ul class="nav nav-pills" id="myTab" role="tablist">
		  <li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#barchart-2-24h" role="tab">Last 24 Hours</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#barchart-2-7days" role="tab">Last 7 Days</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#barchart-2-30days" role="tab">Last 30 Days</a>
		  </li>
		</ul>
	  </div>
	  <!-- chart-nav -->
  
	  <div class="tab-content">
		<div class="tab-pane fade show active" id="barchart-2-24h" role="tabpanel">
		  <div class="d-flex align-items-center sm-column">
			<div class="statistic-doughnut-chart">
			  <canvas id="most-favorited-bar-chart" width="600" height="300"></canvas>
			</div>
			<!-- statistic-doughnut-chart -->
		  </div>
		  <!-- d-flex -->
		</div>
		<div class="tab-pane fade" id="barchart-2-7days" role="tabpanel">...</div>
		<div class="tab-pane fade" id="barchart-2-30days" role="tabpanel">...</div>
	  </div>
	  <!-- tab-content -->
	</div>
	<!-- dashboard-statistic-block -->
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  onMounted(() => {
	const ctx = document.getElementById('most-favorited-bar-chart').getContext('2d');
	new Chart(ctx, {
	  type: 'bar', // Changed to 'bar' (Chart.js now uses 'bar' for both vertical and horizontal bar charts)
	  data: {
		labels: [
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		  'Property ID',
		],
		datasets: [
		  {
			label: 'Likes',
			data: [88, 86, 76, 65, 55, 51, 40, 32, 23],
			backgroundColor: [
			  'rgba(255, 99, 132, 0.5)',
			  'rgba(255, 159, 64, 0.5)',
			  'rgba(255, 205, 86, 0.5)',
			  'rgba(75, 192, 192, 0.5)',
			  'rgba(54, 162, 235, 0.5)',
			  'rgba(153, 102, 255, 0.5)',
			  'rgba(201, 203, 207, 0.5)',
			  'rgba(255, 99, 132, 0.5)',
			  'rgba(255, 159, 64, 0.5)',
			],
			borderColor: [
			  'rgb(255, 99, 132)',
			  'rgb(255, 159, 64)',
			  'rgb(255, 205, 86)',
			  'rgb(75, 192, 192)',
			  'rgb(54, 162, 235)',
			  'rgb(153, 102, 255)',
			  'rgb(201, 203, 207)',
			  'rgb(255, 99, 132)',
			  'rgb(255, 159, 64)',
			],
			borderWidth: 1,
		  },
		],
	  },
	  options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
		  legend: {
			display: false,
		  },
		},
		scales: {
		  x: {
			beginAtZero: true,
		  },
		  y: {
			beginAtZero: true,
		  },
		},
	  },
	});
  });
  </script>
  
  <style>
  /* Add your custom styles here if needed */
  </style>
  