<template>
	<div class="property-banner">
		<div class="container hidden-on-mobile">
			<!-- <?php include 'inc/property/templates/banner-nav.php';?> -->
			<BannerNav />
		</div><!-- container -->
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane show active" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
				<div class="property-image-count"><i class="houzez-icon icon-picture-sun"></i> 6</div>
				<!-- <?php include 'inc/property/templates/property-gallery.php';?> -->
				<PropertyGallery />
			</div><!-- tab-pane -->
			<div class="tab-pane" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
				<!-- <?php include 'inc/map.php';?>  -->
				<Map />
			</div><!-- tab-pane -->
			<div class="tab-pane" id="pills-street-view" role="tabpanel" aria-labelledby="pills-street-view-tab">
				<!-- <?php include 'inc/map.php';?>  -->
				<Map />
			</div><!-- tab-pane -->
		</div><!-- tab-content -->
	</div><!-- property-banner -->
</template>

<script setup lang="ts">
import BannerNav from './BannerNav.vue';
import PropertyGallery from './PropertyGallery.vue';
import Map from './Map.vue';
</script>
