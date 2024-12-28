<template>
    <div class="dashboard-content-block dashboard-statistic-block">
	<h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Visits</h3>
	<div class="chart-nav">
		<ul class="nav nav-pills" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#chart-24h" role="tab">Last 24 Hours</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#chart-7days" role="tab">Last 7 Days</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#chart-30days" role="tab">Last 30 Days</a>
			</li>
		</ul>	
	</div><!-- chart-nav -->

	<div class="tab-content">
		<div class="tab-pane fade show active" id="chart-24h" role="tabpanel">
            <Hours24Chart />
			
		</div>
		<div class="tab-pane fade" id="chart-7days" role="tabpanel">
            <Days7Chart />
			
		</div>
		<div class="tab-pane fade" id="chart-30days" role="tabpanel">
            <Days30Chart />
			
		</div>
	</div><!-- tab-content -->
	
	
</div><!-- dashboard-statistic-block -->

</template>
<script setup>
import Days30Chart from './Days30Chart.vue';
import Days7Chart from './Days7Chart.vue';
import Hours24Chart from './Hours24Chart.vue';
</script>
