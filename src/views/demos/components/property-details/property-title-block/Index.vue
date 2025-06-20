<template>
    <div class="page-title-wrap">
        <div class="container">
            <div class="d-flex align-items-center">
                <BreadCrumb :property="property" />
                <PropertyTools :property="property" />
            </div><!-- d-flex -->
            <div class="d-flex align-items-center property-title-price-wrap">
                <div class="page-title">
                    <h1>{{ property?.title || 'Untitled Property' }}</h1>
                </div><!-- page-title -->
                <ul class="item-price-wrap hide-on-list">
                    <li class="item-price"><span class="price-prefix">From </span>{{ property.price_prefix }}{{ property?.price }}<span
                            class="price-postfix">/{{ property?.after_price }}</span></li>
                    <li class="item-sub-price">{{ property.price_prefix }}{{ property.second_price }}/{{ property.size_prefix }}</li>
                </ul>
            </div><!-- d-flex -->
            <div class="property-labels-wrap">
                <span v-if="property?.is_featured" class="label-featured label">Featured</span>
                <a href="#" class="label-status label"> {{ property?.status }}</a>
                <a href="#" class="label-status label"> {{ property?.label }}</a>
            </div>
            <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i> {{ property?.address }}  {{ property?.city }},  {{ property?.county_state }},  {{ property?.country }}</address><!-- item-address -->
        </div><!-- container -->
    </div><!-- page-title-wrap -->
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue';
import PropertyTools from './PropertyTools.vue';


const props = defineProps({
  property: Object
})

</script>
