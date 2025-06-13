<template>
    <div class="item-listing-wrap item-listing-wrap-v3 card">
        <div class="item-wrap item-wrap-v3 h-100">
            <a href="#" class="hover-effect">
                <img class="img-fluid" :src="property.thumbnail" alt="property image"
                     :alt="property.title || 'Property Image'" loading="lazy" />
            </a><!-- hover-effect -->
            <h2 class="item-title">
                <a href="#">{{ property.title }}</a>
            </h2><!-- item-title -->
            <!-- add the class item-amenities-with-icons to display the icons -->
            <ul class="item-amenities item-amenities-with-icons">
                <li class="h-beds">
                    <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>
                    <span class="item-amenities-text">Beds:</span> <span>{{ property.bedrooms }}</span>
                </li>
                <li class="h-baths">
                    <i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
                    <span class="item-amenities-text">Baths:</span> <span>{{ property.bathrooms }}</span>
                </li>
                <li class="h-cars">
                    <i class="houzez-icon icon-car-1 mr-1"></i>
                    <span class="item-amenities-text">Parkings:</span> <span>{{ property.bathrooms }}</span>
                </li>
                <li class="h-area">
                    <i class="houzez-icon icon-ruler-triangle mr-1"></i>
                    <span>{{ property.area_size }}</span> <span class="area_postfix">{{ property.size_prefix }}</span>
                </li>
                <li class="h-type">
                    <span>{{ property.type }}</span>
                </li>
            </ul>
            <ul class="item-price-wrap hide-on-list">
                <li class="item-price"><span class="price-prefix">From </span>{{ property.price_prefix }}{{ property.price }}
                    <span class="price-postfix">/{{ property.after_price }}</span></li>
                <li class="item-sub-price">$1,200/Sq Ft</li>
            </ul>
            <span class="labels-wrap labels-right">
                <a href="#" class="label-status label">
                    {{ property.label }}
                </a><!-- label-status -->
            </span><!-- labels-wrap -->
            <span class="label-featured label">{{ property.type }}</span><!-- label-featured -->
        </div><!-- item-wrap -->
    </div><!-- item-listing-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  property: Object
})
</script>