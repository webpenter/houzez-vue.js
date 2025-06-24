<template>
    <div class="featured-property-item-widget">
	<div class="item-wrap item-wrap-v3">
        <ItemImage :thumbnail="property.thumbnail" /> 
        <ItemLabels :label="property.label"/>
        <ItemFeaturedLabel :is_featured="property.is_featured" />
        <ItemTitle :title="property.title" :slug="property.slug" />
        <ItemPrice :price="property.price" />
		    <div class="item-address">{{ property.address }}{{ property.city }}</div>
	</div><!-- item-wrap -->
</div><!-- featured-property-item-widget -->
</template>

<script setup>
import ItemImage from './ItemImage.vue';
import ItemLabels from './ItemLables.vue';
import ItemFeaturedLabel from './ItemFeaturedLabel.vue';
import ItemTitle from './ItemTitle.vue';
import ItemPrice from './ItemPrice.vue';

defineProps({
  property: {
    type: Object,
    required: true,
  },
});
</script>