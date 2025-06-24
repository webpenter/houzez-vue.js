<template>
    <div class="property-item-widget">
	<div class="d-flex align-items-start">
		<div class="left-property-item-widget-wrap">{{ property.title }}
			<ItemImage :thumbnail="property.thumbnail" />
		</div><!-- left-property-item-widget-wrap -->
		<div class="right-property-item-widget-wrap">
			<ItemTitle :title="property.title" :slug="property.slug"/>	
			<ItemPrice :price="property.price" />
			<ItemFeaturesV1
				:bedrooms="property.bedrooms"
				:bathrooms="property.bathrooms"
				:garages="property.garages"
				:area_size="property.area_size"
				:type="property.type"
				:size_prefix="property.size_prefix"
			/>
		</div><!-- right-property-item-widget-wrap -->
	</div><!-- d-flex -->
</div><!-- property-item-widget -->
</template>

<script setup>
import ItemImage from './ItemImage.vue';
import ItemTitle from './ItemTitle.vue';
import ItemPrice from './ItemPrice.vue';
import ItemFeaturesV1 from './ItemFeaturesV1.vue';

import { onMounted } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  console.log('PropertyItem received nk:', props.property);
});
</script>