<template>
    <div class="widget widget-wrap widget-mortgage-calculator">
	<div class="widget-header">
		<h3 class="widget-title">
			Mortgage Calculator
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">$</div>
				</div><!-- input-group-prepend -->
				<input type="text" class="form-control" placeholder="Total Amount">
			</div><!-- input-group -->
		</div><!-- form-group -->
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">$</div>
				</div><!-- input-group-prepend -->
				<input type="text" class="form-control" placeholder="Down Payment">
			</div><!-- input-group -->
		</div><!-- form-group -->
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">%</div>
				</div><!-- input-group-prepend -->
				<input type="text" class="form-control" placeholder="Interest Rate">
			</div><!-- input-group -->
		</div><!-- form-group -->
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">
						<i class="houzez-icon icon-attachment"></i>
					</div>
				</div><!-- input-group-prepend -->
				<input type="text" class="form-control" placeholder="Loan Terms (Years)">
			</div><!-- input-group -->
		</div><!-- form-group -->
		<div class="form-group">
			<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count">
				<option>Monthly</option>
				<option>Bi-Weekly</option>
				<option>Weekly</option>
			</select><!-- selectpicker -->
		</div><!-- form-group -->
		<button type="submit" class="btn btn-search btn-secondary btn-full-width">Calculate</button>
		<div class="mortgage-details detail-wrap">
			<ul>
				<li><strong>Monthly Payment: $3,345.00</strong></li>
				<li><strong>Amount Financed:</strong> $100,000.00</li>
				<li><strong>Mortgage Payments:</strong> $3,345.00</li>
				<li><strong>Load Annual Cost:</strong> $38,876.00</li>
			</ul>
		</div><!-- mortgage-details -->
	</div><!-- widget-body -->
</div><!-- widget-mortgage-calculator -->
</template>
<script setup>

</script>