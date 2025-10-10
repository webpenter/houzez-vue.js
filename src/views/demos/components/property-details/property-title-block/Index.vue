<template>
  <div class="property-title-block-wrap">
    <div class="container">
      <div class="d-flex align-items-center">
        <BreadCrumb :property="property" />
        <PropertyTools :property="property" />
      </div><!-- d-flex -->

      <div class="d-flex align-items-center property-title-price-wrap">
        <div class="page-title">
          <h1>{{ property.title || 'Untitled Property' }}</h1>
        </div><!-- page-title -->

        <ul class="item-price-wrap hide-on-list">
          <li class="item-price">
            <span class="price-prefix">{{ $filters.capitalize($t('from')) }}</span>
            {{ property.price_prefix }}{{ property.price }}
            <span class="price-postfix">/{{ property.after_price }}</span>
          </li>
          <li class="item-sub-price">
            {{ property.price_prefix }}{{ property.second_price }}/{{ property.size_prefix }}
          </li>
        </ul>
      </div><!-- property-title-price-wrap -->

      <div class="property-labels-wrap">
        <span v-if="property.is_featured" class="label-featured label">Featured</span>
        <a v-if="property.status" href="#" class="label-status label">{{ property.status }}</a>
        <a v-if="property.label" href="#" class="label-status label">{{ property.label }}</a>
      </div><!-- property-labels-wrap -->

      <address class="item-address">
        <i class="houzez-icon icon-pin mr-1"></i>
        {{ property.address }} {{ property.city }}, {{ property.county_state }}, {{ property.country }}
      </address><!-- item-address -->
    </div><!-- container -->
  </div><!-- property-title-block-wrap -->
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue';
import PropertyTools from './PropertyTools.vue';

defineProps({
  property: {
    type: Object,
    default: () => ({
      title: 'Untitled Property',
      price_prefix: '',
      price: '',
      after_price: '',
      second_price: '',
      size_prefix: '',
      is_featured: false,
      status: '',
      label: '',
      address: '',
      city: '',
      county_state: '',
      country: ''
    })
  }
});
</script>
