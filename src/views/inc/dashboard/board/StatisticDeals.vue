<template>
    <div class="dashboard-content-block dashboard-statistic-block">
	<h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> {{$t('Deals')}}</h3>
	<div class="d-flex align-items-center sm-column">
		<div class="statistic-doughnut-chart">
			<canvas id="deals-doughnut-chart" width="100" height="100"></canvas>
			
		</div><!-- mortgage-calculator-chart -->
		<div class="doughnut-chart-data flex-fill">
			<ul class="list-unstyled">
				<li class="stats-data-3">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>{{$t('Active')}}</strong> <span>{{$t('60')}} <small>{{$t('Deals')}}</small></span>
				</li>
				<li class="stats-data-4">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>{{$t('Won')}}</strong> <span>{{$t('30')}} <small>{{$t('Deals')}}</small></span>
				</li>
				<li class="stats-data-1">
					<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>{{$t('Lost')}}</strong> <span>{{$t('10')}} <small>{{$t('Deals')}}</small></span>
				</li>
			</ul>
		</div><!-- mortgage-calculator-data -->
	</div><!-- d-flex -->
</div><!-- dashboard-statistic-block -->

</template>

<!-- <script setup>
    var ctx = document.getElementById('deals-doughnut-chart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [60, 30, 10],
                backgroundColor: [
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',							
                ],
                borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255 ,99, 132, 1)',
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
</script>  -->