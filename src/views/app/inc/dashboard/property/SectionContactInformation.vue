<template>
    <div class="dashboard-content-block-wrap">
	<h2>Contact Information</h2>
	<div class="dashboard-content-block">
		<p>What information do you want to display in agent data container?</p>
		<div class="form-group">
			<label class="control control--checkbox ">
				<input type="radio" name="radio">Author Data
				<span class="control__indicator"></span>
			</label>
			<label class="control control--checkbox">
				<input type="radio" name="radio">Agent Data (Choose agent from the list below)
				<span class="control__indicator"></span>
			</label>
			<ul class="list-unstyled ml-5">
				<li>
					<label class="control control--checkbox">
						<input type="checkbox" name="checkbox">Agent Name
						<span class="control__indicator"></span>
					</label>
				</li>
				<li>
					<label class="control control--checkbox">
						<input type="checkbox" name="checkbox">Agent Name
						<span class="control__indicator"></span>
					</label>
				</li>
				<li>
					<label class="control control--checkbox">
						<input type="checkbox" name="checkbox">Agent Name
						<span class="control__indicator"></span>
					</label>
				</li>
				<li>
					<label class="control control--checkbox">
						<input type="checkbox" name="checkbox">Agent Name
						<span class="control__indicator"></span>
					</label>
				</li>
			</ul>
			<label class="control control--checkbox">
				<input type="radio" name="radio">Do not display
				<span class="control__indicator"></span>
			</label>
		</div>
			<!-- <div class="form-group">
				<label>Select an Agent</label>
				<select class="selectpicker form-control bs-select-hidden" title="None" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
					<option>Option</option>
					<option>Option</option>
					<option>Option</option>
					<option>Option</option>
					<option>Option</option>
				</select>
			</div> -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->


</template>