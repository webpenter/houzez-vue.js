<template>
    <div class="dashboard-content-block dashboard-statistic-block">
	<h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> Visits</h3>
	<div class="chart-nav">
		<ul 
    id="myTab"
    class="nav nav-pills"  role="tablist">
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
		<div id="chart-24h" class="tab-pane fade show active" role="tabpanel">
            <Hours24Chart />
			
		</div>
		<div id="chart-7days" class="tab-pane fade"  role="tabpanel">
            <Days7Chart />
			
		</div>
		<div id="chart-30days" class="tab-pane fade"  role="tabpanel">
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
