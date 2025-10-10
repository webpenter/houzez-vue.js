<template>
	<div class="dashboard-content-block dashboard-statistic-block">
	  <h3>
		<i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i>
		Most Viewed
	  </h3>
	  <div class="chart-nav"> 
		<ul id="myTab" class="nav nav-pills"  role="tablist">
		  <li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#barchart-1-24h" role="tab">Last 24 Hours</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#barchart-1-7days" role="tab">Last 7 Days</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#barchart-1-30days" role="tab">Last 30 Days</a>
		  </li>
		</ul>
	  </div>
	  <!-- chart-nav -->
  
	  <div class="tab-content">
		<div id="barchart-1-24h"  class="tab-pane fade show active" role="tabpanel">
		  <div class="d-flex align-items-center sm-column">
			<div class="statistic-doughnut-chart">
			  <canvas ref="mostViewedBarChart"></canvas>
			</div>
			<!-- statistic-doughnut-chart -->
		  </div>
		  <!-- d-flex -->
		</div>
		<div id="barchart-1-7days" class="tab-pane fade"  role="tabpanel">...</div>
		<div  id="barchart-1-30days" class="tab-pane fade" role="tabpanel">...</div>
	  </div>
	  <!-- tab-content -->
	</div>
	<!-- dashboard-statistic-block -->
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
//   import { Chart } from 'chart.js';
  
  const mostViewedBarChart = ref(null);
  
  onMounted(() => {
	const ctx = mostViewedBarChart.value.getContext('2d');
	new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ['Property ID', 'Property ID', 'Property ID', 'Property ID', 'Property ID', 'Property ID', 'Property ID', 'Property ID', 'Property ID'],
		datasets: [
		  {
			label: 'Views',
			data: [990, 760, 650, 550, 409, 402, 359, 319, 291],
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
		  y: {
			beginAtZero: true,
		  },
		},
	  },
	});
  });
  </script>
  