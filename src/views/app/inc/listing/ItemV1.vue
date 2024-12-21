<template>
    <div class="item-listing-wrap card">
	<div class="item-wrap item-wrap-v1 item-wrap-no-frame h-100">
		<div class="d-flex align-items-center h-100">
			<div class="item-header">
				<ItemFeaturedLabel/>
				<ItemLabels/>
				<ItemPrice/>
				<ItemToolsV2/>
				<ItemImage/>
			</div><!-- item-header -->	
			<div class="item-body flex-grow-1">
				<ItemLabels/>
				<ItemTitle/>
				<ItemPrice/>
				<ItemAddress/>
				<ItemShortDescription/>
				<ItemFeaturesV1/>
				<ItemBtn/>
				<ItemAuthor/>
				<ItemDate/>
			</div><!-- item-body -->
			<div class="item-footer clearfix">
				<ItemAuthor/>
				<ItemDate/>
			</div>
		</div><!-- d-flex -->
	</div><!-- item-wrap -->
</div><!-- item-listing-wrap -->
</template>

<script setup>
import ItemAddress from './templates/ItemAddress.vue';
import ItemAuthor from './templates/ItemAuthor.vue';
import ItemBtn from './templates/ItemBtn.vue';
import ItemDate from './templates/ItemDate.vue';
import ItemFeaturedLabel from './templates/ItemFeaturedLabel.vue';
import ItemFeaturesV1 from './templates/ItemFeaturesV1.vue';
import ItemImage from './templates/ItemImage.vue';
import ItemLabels from './templates/ItemLabels.vue';
import ItemPrice from './templates/ItemPrice.vue';
import ItemShortDescription from './templates/ItemShortDescription.vue';
import ItemTitle from './templates/ItemTitle.vue';
import ItemToolsV2 from './templates/ItemToolsV2.vue';
</script>