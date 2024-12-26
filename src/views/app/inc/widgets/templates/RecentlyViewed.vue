<template>
    <div class="property-item-widget">
	<div class="d-flex align-items-start">
		<div class="left-property-item-widget-wrap">
            <ItemImage />
		
		</div><!-- left-property-item-widget-wrap -->
		<div class="right-property-item-widget-wrap">
            <ItemTitle />
            <ItemPrice />
			
		</div><!-- right-property-item-widget-wrap -->
	</div><!-- d-flex -->
</div><!-- property-item-widget -->
</template>
<script setup>
import ItemImage from '../../listing/templates/ItemImage.vue';
import ItemPrice from '../../listing/templates/ItemPrice.vue';
import ItemTitle from '../../listing/templates/ItemTitle.vue';

</script>