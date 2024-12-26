<template>
    <div class="featured-property-item-widget">
	<div class="item-wrap item-wrap-v3">
        
        <ItemImage />
        <ItemLabels />
        <ItemFeaturedLabel />
        <ItemTitle />
        <ItemPrice />
		
		<div class="item-address">Miami, FL</div>
	</div><!-- item-wrap -->
</div><!-- featured-property-item-widget -->
</template>
<script setup>
import ItemFeaturedLabel from '../../listing/templates/ItemFeaturedLabel.vue';
import ItemImage from '../../listing/templates/ItemImage.vue';
import ItemLabels from '../../listing/templates/ItemLabels.vue';
import ItemPrice from '../../listing/templates/ItemPrice.vue';
import ItemTitle from '../../listing/templates/ItemTitle.vue';


</script>