<template>
    <div class="dashboard-content-block dashboard-statistic-block">
	<h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Devices</h3>
	<div class="d-flex align-items-center sm-column">
		<div class="statistic-doughnut-chart">
			<canvas ref="devicesdoughnutchart" width="100" height="100"></canvas>
			
		</div><!-- mortgage-calculator-chart -->
		<div class="doughnut-chart-data flex-fill">
			<ul class="list-unstyled">
				<li class="stats-data-1">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Desktop</strong> <span>1,5k <small>Views</small></span>
				</li>
				<li class="stats-data-2">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Tablet</strong> <span>$2,4k <small>Views</small></span>
				</li>
				<li class="stats-data-3">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Phone</strong> <span>1,3k <small>Views</small></span>
				</li>
				<li class="stats-data-4">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Others</strong> <span>786 <small>Views</small></span>
				</li>
			</ul>
		</div><!-- mortgage-calculator-data -->
	</div><!-- d-flex -->
</div><!-- dashboard-statistic-block -->

</template>
<script setup>
  import { ref, onMounted } from 'vue';
//   import { Chart } from 'chart.js';
  
  const devicesdoughnutchart = ref(null);
  onMounted(()=>{

	const ctx = devicesdoughnutchart.value.getContext('2d');
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
							'rgba(255 ,99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)'
							],
							borderWidth: 1
						}]
					},
					options: {
						cutoutPercentage: 60,
						responsive: false,
						tooltips: false,
					}
				});
  });
</script>