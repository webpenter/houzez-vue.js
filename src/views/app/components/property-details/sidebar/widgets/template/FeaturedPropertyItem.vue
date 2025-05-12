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
import ItemImage from './ItemImage.vue';
import ItemLabels from './ItemLables.vue';
import ItemFeaturedLabel from './ItemFeaturedLabel.vue';
import ItemTitle from './ItemTitle.vue';
import ItemPrice from './ItemPrice.vue';
</script>