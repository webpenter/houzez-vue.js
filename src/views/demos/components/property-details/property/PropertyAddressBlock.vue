<template>
<div class="property-address-wrap property-section-wrap" id="property-address-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap d-flex justify-content-between align-items-center">
			<h2>Address</h2>
			<!-- <a class="btn btn-primary btn-slim" href="#" target="_blank"><i class="houzez-icon icon-maps mr-1"></i> Open on Google Maps</a> -->
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
			 <!-- <Map></Map> -->
			<iframe
				:src="mapUrl"
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
        	>
			</iframe>
		</div><!-- block-map-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-address-wrap -->
</template>

<script setup>
import Map from '../property-banner-v1/Map.vue'
import { ref } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const address = ref(`${props.property.latitude},${props.property.longitude}`);

const mapUrl = ref(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345093707!2d${address.value.split(',')[1]}!3d${address.value.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645488305008`);
</script>
