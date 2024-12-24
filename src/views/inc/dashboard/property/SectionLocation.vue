<script setup>
import Map from '../../Map.vue';
</script>

<template>
    
<div class="dashboard-content-block-wrap">
	<h2>Property Location</h2>
	<form id="no-auto-fill">
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Address</label>
					<input class="form-control is-valid" name="name" placeholder="Enter your property address" type="text" autocomplete="off">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Country</label>
					<input class="form-control is-invalid" name="name" placeholder="Enter your property country" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>County / State</label>
					<input class="form-control" name="name" placeholder="Enter your property county/state" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>City</label>
					<input class="form-control" name="name" placeholder="Enter your property city" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Neighborhood</label>
					<input class="form-control" name="name" placeholder="Enter your property neighborhood" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Postal Code / Zip</label>
					<input class="form-control" name="name" placeholder="Enter your property zip code" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
		</div><!-- row -->			
	</div><!-- dashboard-content-block -->
	</form>
</div><!-- dashboard-content-block-wrap -->
<div class="dashboard-content-block-wrap">
	<h2>Map</h2>
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="form-group dashboard-map-field">
					<label>Drag and drop the pin on map to find exact location</label>
                    <Map></Map>
					<!-- <?php include 'inc/map.php';?> -->
				</div>
				<button type="button" class="btn btn-primary btn-full-width">Place the pin in address above</button>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Google Maps Latitude</label>
					<input class="form-control" name="name" placeholder="Enter google maps latitude" type="text">
				</div>
				<div class="form-group">
					<label>Google Maps Longitude</label>
					<input class="form-control" name="name" placeholder="Enter google maps longitude" type="text">
				</div>
				<div class="form-group">
					<label>Google Map Street View</label>
					<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Hide</option>
						<option>Show</option>
					</select><!-- selectpicker -->
				</div>
			</div><!-- col-md-6 col-sm-12 -->

		</div><!-- row -->			
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->


</template>