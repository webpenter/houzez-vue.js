<template>
    <div class="dashboard-slide-panel-wrap">
	<h2>Add New Deal</h2>
	<button type="button" class="btn open-close-slide-panel">
		<span aria-hidden="true">&times;</span>
	</button>
	<div class="form-group">
		<label>Group</label>
		<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
			<option>Active Deals</option>
			<option>Won Deals</option>
			<option>Lost Deals</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Title</label>
		<input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
	</div>
	<div class="form-group">
		<label>Contact Name</label>
		<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Agent</label>
		<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Deal Value</label>
		<input class="form-control is-invalid" name="name" placeholder="Enter the deal value" type="text">
	</div>
	<button type="button" class="btn btn-primary btn-full-width mt-2">Save</button>
</div><!-- dashboard-slide-panel-wrap -->
</template>