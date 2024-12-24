<template>
    <div class="property-item-widget">
	<div class="d-flex align-items-start">
		<div class="left-property-item-widget-wrap">
            <ItemImage />
			
		</div><!-- left-property-item-widget-wrap -->
		<div class="right-property-item-widget-wrap">
            <ItemTitle />
            <ItemPrice />
            <ItemFeaturesV1 />
			
		</div><!-- right-property-item-widget-wrap -->
	</div><!-- d-flex -->
</div><!-- property-item-widget -->
</template>
<script setup>
import ItemFeaturesV1 from '../../listing/templates/ItemFeaturesV1.vue';
import ItemImage from '../../listing/templates/ItemImage.vue';
import ItemPrice from '../../listing/templates/ItemPrice.vue';
import ItemTitle from '../../listing/templates/ItemTitle.vue';

</script>