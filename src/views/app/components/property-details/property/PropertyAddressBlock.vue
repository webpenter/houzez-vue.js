<template>
<div class="property-address-wrap property-section-wrap" id="property-address-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap d-flex justify-content-between align-items-center">
			<h2>Address</h2>
			<a class="btn btn-primary btn-slim" href="#" target="_blank"><i class="houzez-icon icon-maps mr-1"></i> Open on Google Maps</a>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<ul class="list-2-cols list-unstyled">
				<li><strong>Address:</strong> <span>{{ property.address }}</span></li>
				<li><strong>City:</strong> <span>{{ property.city }}</span></li>
				<li><strong>State/County:</strong> <span>{{ property.county_state }}</span></li>
				<li><strong>Zip Code:</strong> <span>{{ property.zip_postal_code }}</span></li>
				<li><strong>Neighborhood:</strong> <span>{{ property.neighborhood }}</span></li>				
				<li><strong>Country:</strong> <span>{{ property.country }}</span></li>
			</ul>	
		</div><!-- block-content-wrap -->
		<div class="block-map-wrap">
			<!-- <Map :latitude="34.0522" :longitude="-118.2437" :zoom="12" :mapType="mapType" :marker="marker" /> -->
			 <Map></Map>
		</div><!-- block-map-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-address-wrap -->
</template>

<script setup>
import Map from '../property-banner-v1/Map.vue'

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})
</script>
