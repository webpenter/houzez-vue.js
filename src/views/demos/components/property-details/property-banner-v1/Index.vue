<template>
	<div class="property-banner">
		<div class="container hidden-on-mobile">
			<BannerNav />
		</div><!-- container -->
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane show active" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
				<div class="property-image-count"><i class="houzez-icon icon-picture-sun"></i> 6</div>
				<PropertyGallery :property="property" />
			</div><!-- tab-pane -->
			<div class="tab-pane" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
				<iframe
				:src="mapUrl"
				width="100%"
				height="100%"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
        	>
			</iframe>
				<!-- <Map /> -->
			</div><!-- tab-pane -->
		</div><!-- tab-content -->
	</div><!-- property-banner -->
</template>

<script setup>
import { ref } from 'vue';
import BannerNav from './BannerNav.vue';
import PropertyGallery from './PropertyGallery.vue';
import Map from './Map.vue';

const props = defineProps({
  property: Object
});	

const address = ref(`${props.property.latitude},${props.property.longitude}`);

const mapUrl = ref(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345093707!2d${address.value.split(',')[1]}!3d${address.value.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645488305008`);
</script>
