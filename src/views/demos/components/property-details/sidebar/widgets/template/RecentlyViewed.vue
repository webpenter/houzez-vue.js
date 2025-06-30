<template>
    <div class="property-item-widget">
        <div class="d-flex align-items-start">
            <div class="left-property-item-widget-wrap">
                <Image :thumbnail="property.thumbnail" />   
            </div><!-- left-property-item-widget-wrap -->
            <div class="right-property-item-widget-wrap">
                <Title :title="property.title" :slug="property.slug" />
                <Price :price="property.price" />
            </div><!-- right-property-item-widget-wrap -->
        </div><!-- d-flex -->
    </div><!-- property-item-widget -->
</template>
<script setup>
import Image from '../template/ItemImage.vue';
import Title from '../template/ItemTitle.vue';
import Price from '../template/ItemPrice.vue';

defineProps({
  property: {
    type: Object,
    required: true
  }
});
</script>
