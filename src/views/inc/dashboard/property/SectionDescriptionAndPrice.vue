<template>
<div class="dashboard-content-block-wrap">
	<h2>Description</h2>
	<div class="dashboard-content-block">
		<div class="form-group">
			<label>Title</label>
			<input class="form-control is-valid" name="name" placeholder="Enter the property title" type="text">
		</div>
		<div class="form-group">
			<label>Description</label>
			<textarea class="form-control" name="message" rows="10" placeholder="Enter the property description"></textarea>
		</div>
		<div class="row">
			<div class="col-md-4 col-sm-12">
				<div class="form-group">
					<label>Type</label>
					<!-- <select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false"> -->
					<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
					</select><!-- selectpicker -->
				</div><!-- form-group -->
			</div><!-- col-md-4 col-sm-12 -->
			<div class="col-md-4 col-sm-12">
				<div class="form-group">
					<label>Status</label>
					<!-- <select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count"  data-actions-box="false"> -->
					<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
					</select><!-- selectpicker -->
				</div><!-- form-group -->
			</div><!-- col-md-4 col-sm-12 -->
			<div class="col-md-4 col-sm-12">
				<div class="form-group">
					<label>Labels</label>
					<!-- <select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="true"> -->
					<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="true">
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
					</select><!-- selectpicker -->
				</div><!-- form-group -->
			</div><!-- col-md-4 col-sm-12 -->
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Price</h2>
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Sale or Rent Price</label>
					<input class="form-control is-invalid" name="name" placeholder="Enter the price" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Second Price (Optional)</label>
					<input class="form-control" name="name" placeholder="Enter the second price" type="text">
				</div><!-- form-group -->
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>After The Price Label</label>
					<input class="form-control" name="name" placeholder="Enter the label after price" type="text">
					<small class="form-text text-muted">For example: Monthly</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Price Prefix</label>
					<input class="form-control" name="name" placeholder="Enter the price prefix" type="text">
					<small class="form-text text-muted">For example: Start from</small>
				</div><!-- form-group -->
			</div><!-- col-md-6 col-sm-12 -->
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Custom Fields</h2>
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>Custom Text</label>
					<div class="features-list">
						<label class="control control--checkbox">
							<input type="checkbox" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--checkbox">
							<input type="checkbox" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--checkbox">
							<input type="checkbox" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--checkbox">
							<input type="checkbox" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
					</div><!-- features-list -->
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>Custom Text</label>
					<div class="features-list">
						<label class="control control--radio">
							<input type="radio" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--radio">
							<input type="radio" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--radio">
							<input type="radio" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
						<label class="control control--radio">
							<input type="radio" name="air-conditioning">Option
							<span class="control__indicator"></span>
						</label>
					</div><!-- features-list -->
				</div>
			</div><!-- col-md-6 col-sm-12 -->
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->
</template>

<script setup>
</script>
