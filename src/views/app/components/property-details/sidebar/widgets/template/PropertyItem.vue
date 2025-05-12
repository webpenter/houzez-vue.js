<template>
    <div class="property-item-widget">
	<div class="d-flex align-items-start">
		<div class="left-property-item-widget-wrap">
			<!-- <?php include 'inc/listing/templates/item-image.php';?>	 -->
			<ItemImage />

		</div><!-- left-property-item-widget-wrap -->
		<div class="right-property-item-widget-wrap">
			<!-- <?php //include 'inc/listing/templates/item-title.php';?> -->
			<ItemTitle />	
			<!-- <?php include 'inc/listing/templates/item-price.php';?> -->
			<ItemPrice />
			<!-- <?php include 'inc/listing/templates/item-features-v1.php';?> -->
			<ItemFeaturesV1 />
		</div><!-- right-property-item-widget-wrap -->
	</div><!-- d-flex -->
</div><!-- property-item-widget -->
</template>

<script setup>
import ItemImage from './ItemImage.vue';
import ItemTitle from './ItemTitle.vue';
import ItemPrice from './ItemPrice.vue';
import ItemFeaturesV1 from './ItemFeaturesV1.vue';
</script>