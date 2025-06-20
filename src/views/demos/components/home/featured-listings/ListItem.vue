<template>
    <div class="item-listing-wrap card">
        <div class="item-wrap item-wrap-v1 item-wrap-no-frame h-100">
            <div class="d-flex align-items-center h-100">
                <div class="item-header">
                    <span v-if="property.is_featured" class="label-featured label">Featured</span>
                    <span class="labels-wrap labels-right">
                        <a v-if="property?.status" href="#" class="label-status label">{{ property.status }}</a>
                    </span>

                    <ul class="item-price-wrap hide-on-list">
                        <li class="item-price">
                            <span class="price-prefix">From </span>{{ property.price_prefix }}{{ property.price }}
                            <span class="price-postfix">/{{ property.after_price }}</span>
                        </li>
                        <li class="item-sub-price">{{ property.price_prefix }}{{ property.second_price }}/{{ property.size_prefix }}</li>
                    </ul>

                    <!-- <ul class="item-tools item-tools-v2">
                        <li class="item-tool">
                            <span class="item-tool-favorite" data-propid="425" data-toggle="modal" data-target="#listing-lightbox-v2">
                                <span data-toggle="tooltip" data-placement="top" title="Preview">
                                    <i class="houzez-icon icon-expand-3" style="margin-top: 8px;"></i>
                                </span>
                            </span>
                        </li>
                        <li class="item-tool">
                            <span class="item-tool-favorite" data-toggle="tooltip" data-placement="top" title="Favorite" data-propid="425">
                                <i class="houzez-icon icon-love-it" style="margin-top: 8px;"></i>
                            </span>
                        </li>
                        <li class="item-tool">
                            <span class="item-tool-compare show-compare-panel" data-toggle="tooltip" data-placement="top" title="Compare" data-propid="425">
                                <i class="houzez-icon icon-add-circle" style="margin-top: 8px;"></i>
                            </span>
                        </li>
                    </ul> -->

                    <RouterLink
                        :to="{ name: 'demo01.property-details', params: { propertySlug: property.slug } }"
                        class="hover-effect d-block position-relative"
                    >
                        <div class="image-wrapper" :class="{ 'loading': !isLoaded }">
                            <img
                                v-show="isLoaded"
                                class="img-fluid main-image"
                                :src="property.thumbnail"
                                :alt="property.title || 'Property Image'"
                                @load="imageLoaded"
                                loading="lazy"
                            />
                        </div>
                    </RouterLink>
                </div>

                <div class="item-body flex-grow-1">
                    <span class="labels-wrap labels-right">
                        <a href="#" class="label-status label">{{ property.label }}</a>
                    </span>
                    <h2 class="item-title">
                        <RouterLink :to="{ name: 'demo01.property-details', params: { propertySlug: property.slug } }">
                            {{ property.title }}
                        </RouterLink>
                    </h2>

                    <ul class="item-price-wrap hide-on-list">
                        <li class="item-price">
                            <span class="price-prefix">From </span>{{ property.price_prefix }}{{ property.price }}
                            <span class="price-postfix">/{{ property.after_price }}</span>
                        </li>
                        <li class="item-sub-price">{{ property.price_prefix }}{{ property.second_price }}/{{ property.size_prefix }}</li>
                    </ul>

                    <address class="item-address">
                        <i v-if="property?.address && property?.city && property?.county_state && property?.country" class="houzez-icon icon-pin mr-1"></i>
                        {{ $filters.subStr(property.address, 0, 40) }}
                        {{ $filters.subStr(property.city, 0, 40) }},
                        {{ $filters.subStr(property.county_state, 0, 40) }},
                        {{ $filters.subStr(property.country, 0, 40) }}
                    </address>

                    <div class="item-short-description">
                        {{ $filters.subStr(property.description, 0, 60) }}
                    </div>

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
                            <span class="item-amenities-text">Parkings:</span> <span>{{ property.garages }}</span>
                        </li>
                        <li class="h-area">
                            <i class="houzez-icon icon-ruler-triangle mr-1"></i>
                            <span>{{ property.area_size }}</span> <span class="area_postfix">{{ property.size_prefix }}</span>
                        </li>
                        <li class="h-type">
                            <span>{{ property.type }}</span>
                        </li>
                    </ul>

                    <RouterLink
                        :to="{ name: 'demo01.property-details', params: { propertySlug: property.slug } }"
                        class="btn btn-primary btn-item"
                    >
                        Details
                    </RouterLink>

                    <div class="item-author">
                        <i class="houzez-icon icon-single-neutral mr-1"></i>
                        <a href="#">{{ property.user?.user_name }}</a>
                    </div>

                    <div class="item-date">
                        <i class="houzez-icon icon-attachment mr-1"></i>
                        {{ property.created_ago }}
                    </div>
                </div>

                <div class="item-footer clearfix">
                    <div class="item-author">
                        <i class="houzez-icon icon-single-neutral mr-1"></i>
                        <a href="#">{{ property.user?.user_name }}</a>
                    </div>
                    <div class="item-date">
                        <i class="houzez-icon icon-attachment mr-1"></i>
                        {{ property.created_ago }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    property: Object,
});

const isLoaded = ref(false);

const imageLoaded = () => {
    isLoaded.value = true;
};
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  background-color: transparent;
  position: relative;
}

.image-wrapper.loading {
  background-color: #f0f0f0; 
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
