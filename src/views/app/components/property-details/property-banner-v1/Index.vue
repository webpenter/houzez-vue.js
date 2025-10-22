<template>
	<div class="property-banner">
		<div class="container hidden-on-mobile">
			<!-- <?php include 'inc/property/templates/banner-nav.php';?> -->
			<BannerNav />
		</div><!-- container -->
		<div id="pills-tabContent" class="tab-content">
			<div id="pills-gallery" class="tab-pane show active" role="tabpanel" aria-labelledby="pills-gallery-tab">
				<div class="property-image-count"><i class="houzez-icon icon-picture-sun"></i> 6</div>
				<!-- <?php include 'inc/property/templates/property-gallery.php';?> -->
				<PropertyGallery :property="property" />
			</div><!-- tab-pane -->
			<div id="pills-map" class="tab-pane" role="tabpanel" aria-labelledby="pills-map-tab">
				<!-- <?php include 'inc/map.php';?>  -->
				<Map />
			</div><!-- tab-pane -->
			<div id="pills-street-view" class="tab-pane" role="tabpanel" aria-labelledby="pills-street-view-tab">
				<!-- <?php include 'inc/map.php';?>  -->
				<Map />
			</div><!-- tab-pane -->
		</div><!-- tab-content -->
	</div><!-- property-banner -->
</template>

<script setup>
import BannerNav from './BannerNav.vue';
import PropertyGallery from './PropertyGallery.vue';
import Map from './Map.vue';

const props = defineProps({
  property: Object
});	

</script>
