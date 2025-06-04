<template>
    <div class="property-mortgage-calculator-wrap property-section-wrap" id="property-mortgage-calculator-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap">
			<h2>Mortgage Calculator</h2>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<div class="d-flex align-items-center sm-column">
				<div class="mortgage-calculator-chart flex-fill">
					<div class="mortgage-calculator-monthly-payment-wrap">
						<div class="mortgage-calculator-monthly-payment">$1,956</div>
						<div class="mortgage-calculator-monthly-requency">Monthly</div>
					</div><!-- mortgage-calculator-monthly-payment-wrap -->
					<canvas id="mortgage-calculator-chart" width="200" height="200"></canvas>
					<script>
						var ctx = document.getElementById('mortgage-calculator-chart').getContext('2d');
						var myDoughnutChart = new Chart(ctx, {
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
								cutoutPercentage: 85,
								responsive: false,
								tooltips: false,
							}
						});
					</script>
				</div><!-- mortgage-calculator-chart -->
				<div class="mortgage-calculator-data flex-fill">
					<ul class="list-unstyled">
						<li class="mortgage-calculator-data-1 stats-data-1">
							<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Principal & Interest</strong> <span>$1,686</span>
						</li>
						<li class="mortgage-calculator-data-2 stats-data-2">
							<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Property Tax</strong> <span>$2,548</span>
						</li>
						<li class="mortgage-calculator-data-3 stats-data-3">
							<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Home Insurance</strong> <span>$678</span>
						</li>
						<li class="mortgage-calculator-data-4 stats-data-4">
							<i class="houzez-icon icon-sign-badge-circle mr-1"></i> <strong>Home Owners Association Fee</strong> <span>$898</span>
						</li>
					</ul>
				</div><!-- mortgage-calculator-data -->
			</div><!-- d-flex -->
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>Total Amount</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<div class="input-group-text">$</div>
							</div><!-- input-group-prepend -->
							<input type="text" class="form-control" placeholder="Total Amount" value="1,990,000">
						</div><!-- input-group -->
					</div><!-- form-group -->
				</div><!-- col-md-6 -->
				<div class="col-md-6">
					<div class="form-group">
						<label>Down Payment</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<div class="input-group-text">$</div>
							</div><!-- input-group-prepend -->
							<input type="text" class="form-control" placeholder="Down Payment" value="90,000">
						</div><!-- input-group -->
					</div><!-- form-group -->
				</div><!-- col-md-6 -->
				<div class="col-md-6">
					<div class="form-group">
						<label>Interest Rate</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<div class="input-group-text">%</div>
							</div><!-- input-group-prepend -->
							<input type="text" class="form-control" placeholder="Interest Rate" value="3.935">
						</div><!-- input-group -->
					</div><!-- form-group -->
				</div><!-- col-md-6 -->
				<div class="col-md-6">
					<div class="form-group">
						<label>Loan Terms (Years)</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<div class="input-group-text">
									<i class="houzez-icon icon-attachment"></i>
								</div>
							</div><!-- input-group-prepend -->
							<input type="text" class="form-control" placeholder="Loan Terms (Years)" value="30">
						</div><!-- input-group -->
					</div><!-- form-group -->
				</div><!-- col-md-6 -->
				<div class="col-md-12">
					<button type="submit" class="btn btn-search btn-primary">Calculate</button>
				</div><!-- col-md-12 -->
			</div><!-- row -->
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-mortgage-calculator-wrap -->
</template>
<script setup></script>