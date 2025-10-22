<template>
    <div class="item-listing-wrap card"> 
        <div class="item-wrap item-wrap-v1 item-wrap-no-frame h-100">
            <div class="d-flex align-items-center h-100">
                <div class="item-header">
                    <span class="label-featured label">Featured</span><!-- label-featured -->
                    <span class="labels-wrap labels-right">
                        <a href="#" class="label-status label">
                            {{ property.label }}
                        </a><!-- label-status -->
                    </span><!-- labels-wrap -->
                    <ul class="item-price-wrap hide-on-list">
                            <li class="item-price"><span class="price-prefix">From </span>{{ property.price_prefix }}{{ property.price }}<span
                                class="price-postfix">/{{ property.after_price }}</span></li>
                        <li class="item-sub-price">$1,200/Sq Ft</li>
                    </ul>
                    <ul class="item-tools item-tools-v2">
                        <li class="item-tool">
                            <span
class="item-tool-favorite" data-propid="425" data-toggle="modal"
                                data-target="#listing-lightbox-v2">
                                <span data-toggle="tooltip" data-placement="top" title="Preview">
                                    <i class="houzez-icon icon-expand-3 mt-2"></i>
                                </span>
                            </span><!-- item-tool-favorite -->
                        </li><!-- item-tool -->
                        <li class="item-tool">
                            <span
class="item-tool-favorite" data-toggle="tooltip" data-placement="top" title="Favorite"
                                data-propid="425">
                                <i class="houzez-icon icon-love-it mt-2"></i>
                            </span><!-- item-tool-favorite -->
                        </li><!-- item-tool -->
                        <li class="item-tool">
                            <span
class="item-tool-compare show-compare-panel" data-toggle="tooltip"
                                data-placement="top" title="Compare" data-propid="425">
                                <i class="houzez-icon icon-add-circle mt-2"></i>
                                <!-- <i class="houzez-icon icon-subtract-circle"></i> -->
                            </span><!-- item-tool-compare -->
                        </li><!-- item-tool -->
                    </ul><!-- item-tools -->
                    <a href="#" class="hover-effect d-block position-relative">
                        <img
                            v-if="!isLoaded"
                            class="img-fluid placeholder-image"
                            src="@/assets/img/app-side/placeholder.jpg"
                            alt="Loading..."
                        />
                        <img
                            class="img-fluid main-image"
                            :src="property.thumbnail"
                            :alt="property.title || 'Property Image'"
                            loading="lazy"
                            @load="imageLoaded"
                        />
                    </a><!-- hover-effect -->
                </div><!-- item-header -->

                <div class="item-body flex-grow-1">
                    <span class="labels-wrap labels-right">
                        <a href="#" class="label-status label">
                            Label
                        </a><!-- label-status -->
                    </span><!-- labels-wrap -->
                    <h2 class="item-title">
                        <a href="#">{{ $filters.subStr($filters.capitalize(property.title), 0, 30) }}</a>
                    </h2><!-- item-title -->
                    <ul class="item-price-wrap hide-on-list">
                        <li class="item-price"><span class="price-prefix">From </span>$9,990<span
                                class="price-postfix">/mo</span></li>
                        <li class="item-sub-price">$1,200/Sq Ft</li>
                    </ul>
                    <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>
                        {{ $filters.subStr(property.address, 0, 40) }} 
                        {{ $filters.subStr(property.city, 0, 40) }}, 
                        {{ $filters.subStr(property.county_state, 0, 40) }}, 
                        {{ $filters.subStr(property.country, 0, 40) }} 
                    </address><!-- item-address -->
                    <!-- <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>9701 W Broadview Dr, Bay Harbor Islands, FL 33154, United States</address>item-address -->
                    <div class="item-short-description">
                        {{ $filters.subStr(property.description, 0, 60) }}
                    </div>
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
                        :to="{ name: 'app.property-details', params: { slug: property.slug } }"
                        class="btn btn-primary btn-item"
                        >
                        Details
                    </RouterLink>
                    <div class="item-author">
                        <i class="houzez-icon icon-single-neutral mr-1"></i>
                        <a href="#">{{ property.user?.user_name }}</a>
                    </div><!-- item-author -->
                    <div class="item-date">
                        <i class="houzez-icon icon-attachment mr-1"></i>
                        {{ property.created_ago }}
                    </div><!-- item-date -->
                </div><!-- item-body -->
                <div class="item-footer clearfix">
                    <div class="item-author">
                        <i class="houzez-icon icon-single-neutral mr-1"></i>
                        <a href="#">{{ property.user?.user_name }}</a>
                    </div><!-- item-author -->
                    <div class="item-date">
                        <i class="houzez-icon icon-attachment mr-1"></i>
                        {{ property.created_ago }}
                    </div><!-- item-date -->
                </div>
            </div><!-- d-flex -->
        </div><!-- item-wrap -->
    </div><!-- item-listing-wrap -->
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