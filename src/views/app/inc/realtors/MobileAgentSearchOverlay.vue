<template>
  <section id="overlay-agent-search-module" class="overlay-search-advanced-module overlay-agent-search-module">
	<div class="search-title">
		Search
		<button type="button" class="btn overlay-search-module-close"><i class="houzez-icon icon-close hz-navigation-close"></i></button>
	</div>
	<div class="row">
		<div class="col-12">
			<div class="form-group">
				<div class="search-icon">
					<input type="text" class="form-control" placeholder="Search">
				</div><!-- search-icon -->
			</div><!-- form-group -->
		</div><!-- col-12 -->
		<div class="col-md-4 col-sm-12">
			<div class="form-group">
				<select class="selectpicker form-control bs-select-hidden" title="Type" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="true"  multiple>
					<option data-subtext="Agents">Agent</option>
					<option data-subtext="Agency">Agency</option>
				</select><!-- selectpicker -->
			</div><!-- form-group -->
		</div><!-- col-md-4 col-sm-12 -->
		<div class="col-md-4 col-sm-12">
			<div class="form-group">
				<select class="selectpicker form-control bs-select-hidden" title="City" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="true"  multiple>
					<option data-subtext="Illinois">Chicago</option>
					<option data-subtext="Florida">Miami</option>
					<option data-subtext="New York">New York</option>
					<option data-subtext="California">San Francisco</option>
				</select><!-- selectpicker -->
			</div><!-- form-group -->
		</div><!-- col-md-4 col-sm-12 -->
		<div class="col-md-4 col-sm-12">
			<div class="form-group">
				<select class="selectpicker form-control bs-select-hidden" title="Language" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="true"  multiple>
					<option data-subtext="English">English</option>
					<option data-subtext="Spanish">Spanish</option>
					<option data-subtext="German">German</option>
				</select><!-- selectpicker -->
			</div><!-- form-group -->
		</div><!-- col-md-4 col-sm-12 -->
		
		<div class="col-12">
			<!-- <?php include 'inc/search/fields/submit-button.php';?> -->
		</div><!-- col-12 -->
	</div><!-- row -->
</section><!-- overlay-agent-search-module -->
</template>
<script setup></script>