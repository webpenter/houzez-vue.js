<script setup lang="ts">
import FormSubProperty from './FormSubProperty.vue';
</script>

<template>
    <div class="dashboard-content-block-wrap">
	<h2>Multi Units / Sub Properties</h2>
	<div class="dashboard-content-block">
		<div class="form-group">
			<label>Do you want to enable multi units / sub properties?</label>
			<select class="selectpicker form-control bs-select-hidden" title="Disable" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
				<option>Disable</option>
				<option>Enable</option>
			</select><!-- selectpicker -->
		</div><!-- form-group -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Add a Sub Property</h2>
	<div class="dashboard-content-block">
        <FormSubProperty />
		<!-- <?php include 'inc/dashboard/property/form-sub-property.php'; ?> -->
		<button class="btn btn-primary btn-left-icon"><i class="houzez-icon icon-add-circle"></i> Add New</button>
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->


</template>