<template>
    <template v-if="loading">
        <PropertyDetailsSkeleton />
    </template>
    <template v-else>
        <section class="content-wrap property-wrap property-detail-v3">
            <PropertyNavigation :property="property" />
            <PropertyTitleBlock :property="property" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">
                        <div class="property-top-wrap">
                            <PropertyBannerV1 :property="property" />
                        </div><!-- property-top-wrap -->
                        <div class="property-view">
                            <div class="visible-on-mobile">
                                <div class="mobile-top-wrap">
                                    <div class="mobile-property-tools clearfix">
                                        <!-- <?php include 'inc/property/templates/banner-nav.php';?> -->
                                        <BannerNav :property="property" />
                                        <!-- <?php include 'inc/property/property-tools.php';?>  -->
                                        <PropertyTools :property="property" />
                                    </div><!-- mobile-property-tools -->
                                    <div class="mobile-property-title clearfix">
                                        <span v-if="property?.is_featured"
                                            class="label-featured label">Featured</span><!-- label-featured -->
                                        <div class="page-title">
                                            <h1>{{ property?.title || 'Untitled Property' }}</h1>
                                        </div><!-- page-title -->
                                        <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>{{
                                            property?.address }} {{ property?.city }}, {{ property?.county_state }}, {{
                                            property?.country }}</address><!-- item-address -->
                                        <ul class="item-price-wrap hide-on-list">
                                            <li class="item-price"><span class="price-prefix">From </span>{{
                                                property.price_prefix }}{{ property?.price }}<span
                                                    class="price-postfix">/{{ property?.after_price }}</span></li>
                                            <li class="item-sub-price">{{ property.price_prefix }}{{
                                                property.second_price }}/{{ property.size_prefix }}</li>
                                        </ul>
                                        <div class="property-labels-wrap">
                                            <a href="#" class="label-status label">For {{ property?.label }}</a>
                                            <!-- <a href="#" class="label-status label">Label</a> -->
                                            <!-- <a href="#" class="label-status label">Label</a> -->
                                        </div>
                                    </div><!-- mobile-property-title -->
                                </div><!-- mobile-top-wrap -->
                            </div><!-- visible-on-mobile -->

                            <!-- <PropertyOverviewBlockV1 :property="property" /> not similiar to provided demo01 -->
                            <PropertyOverviewBlock :property="property" />
                            <PropertyDescriptionBlock :property="property" />
                            <PropertyScheduleATourBlockV2
                                :property="{ id: property.id, thumbnail: property.thumbnail }" />
                            <PropertyGalleryBlock :property="property" />
                            <PropertyAddressBlock :property="property" />
                            <PropertyDetailBlock :property="property" />
                            <!-- <PropertyMortgageCalculatorBlock :property="property" /> -->
                            <PropertySubListingsTableBlock
                                v-if="property.sub_properties && property.sub_properties.length" :property="property" />
                            <!-- <PropertySubListingsBlock :property="property" /> not similiar to provided demo01 -->
                            <PropertyEnergyClassBlock :property="property" />
                            <PropertyFeaturesBlockWithCustomIcons :property="property" />
                            <PropertyFloorPlansBlock v-if="property.floorplans && property.floorplans.length"
                                :floorplans="property.floorplans" :price-prefix="property.price_prefix"
                                :size-prefix="property.size_prefix" />
                            <!-- <PropertyWalkscoreBlock />   -->
                            <!-- <PropertyWalkscoreBlockV2 /> -->
                            <!-- <PropertyNearbyBlock /> -->
                            <PropertyVideoBlock v-if="property.video_url" :iframeCode="property.video_url" />
                            <PropertyScheduleATourBlock :property-id="property.id" />
                            <PropertyVirtualTourBlock v-if="property.virtual_tour"
                                :iframeCode="property.virtual_tour" />
                            <!-- <PropertyAvailabilityCalendarBlock /> -->
                            <!-- <PropertyAgentBlock :property="property" /> -->
                            <PropertyReviews :property="property" />
                            <!-- <PropertySimilarProperties /> -->
                            <!-- <PropertyNav /> -->
                        </div><!-- listing-view -->
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap houzez_sticky">
                        <div class="theiaStickySidebar">
                            <!-- <?php include 'inc/sidebar.php';?>  -->
                            <Sidebar :property="property" />
                        </div><!-- theiaStickySidebar -->
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
    </template>
</template>

<script setup>
import PropertyNavigation from '@/views/demos/components/property-details/property-navigation/Index.vue';
import PropertyTitleBlock from '@/views/demos/components/property-details/property-title-block/Index.vue';
import PropertyBannerV1 from '@/views/demos/components/property-details/property-banner-v1/Index.vue';
import BannerNav from '@/views/demos/components/property-details/property-banner-v1/BannerNav.vue';
import PropertyTools from '@/views/demos/components/property-details/property-title-block/PropertyTools.vue';
import Sidebar from '@/views/demos/components/property-details/sidebar/Index.vue';
import PropertyOverviewBlockV1 from '@/views/demos/components/property-details/property/PropertyOverviewBlockV1.vue';
import PropertyOverviewBlock from '@/views/demos/components/property-details/property/PropertyOverviewBlock.vue';
import PropertyDescriptionBlock from '@/views/demos/components/property-details/property/PropertyDescriptionBlock.vue';
import PropertyScheduleATourBlockV2 from '@/views/demos/components/property-details/property/PropertyScheduleATourBlockV2.vue';
import PropertyGalleryBlock from '@/views/demos/components/property-details/property/PropertyGalleryBlock.vue';
import PropertyAddressBlock from '@/views/demos/components/property-details/property/PropertyAddressBlock.vue';
import PropertyDetailBlock from '@/views/demos/components/property-details/property/PropertyDetailBlock.vue';
import PropertyMortgageCalculatorBlock from '@/views/demos/components/property-details/property/PropertyMortgageCalculatorBlock.vue';
import PropertySubListingsTableBlock from '@/views/demos/components/property-details/property/PropertySubListingsTableBlock.vue';
import PropertySubListingsBlock from '@/views/demos/components/property-details/property/PropertySubListingsBlock.vue';
import PropertyEnergyClassBlock from '@/views/demos/components/property-details/property/PropertyEnergyClassBlock.vue';
import PropertyFeaturesBlockWithCustomIcons from '@/views/demos/components/property-details/property/PropertyFeaturesBlockWithCustomIcons.vue';
import PropertyFloorPlansBlock from '@/views/demos/components/property-details/property/PropertyFloorPlansBlock.vue';
import PropertyWalkscoreBlock from '@/views/demos/components/property-details/property/PropertyWalkscoreBlock.vue';
import PropertyWalkscoreBlockV2 from '@/views/demos/components/property-details/property/PropertyWalkscoreBlockV2.vue';
import PropertyNearbyBlock from '@/views/demos/components/property-details/property/PropertyNearbyBlock.vue';
import PropertyVideoBlock from '@/views/demos/components/property-details/property/PropertyVideoBlock.vue';
import PropertyScheduleATourBlock from '@/views/demos/components/property-details/property/PropertyScheduleATourBlock.vue';
import PropertyVirtualTourBlock from '@/views/demos/components/property-details/property/PropertyVirtualTourBlock.vue';
import PropertyAvailabilityCalendarBlock from '@/views/demos/components/property-details/property/PropertyAvailabilityCalendarBlock.vue';
import PropertyAgentBlock from '@/views/demos/components/property-details/property/PropertyAgentBlock.vue';
import PropertyReviews from '@/views/demos/components/property-details/property/PropertyReviews.vue';
import PropertySimilarProperties from '@/views/demos/components/property-details/property/SimilarProperties.vue';
import PropertyNav from '@/views/demos/components/property-details/property/PropertyNav.vue';

import PropertyDetailsSkeleton from '@/components/skeleton/PropertyDetailsSkeleton.vue';

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppPropertyDemo01  } from '@/stores/index.js';
import { storeToRefs } from 'pinia';


// Store and Routing
const route = useRoute();
const router = useRouter();
const propertySlug = route.params.propertySlug;


// Pinia Store
const propertyStore = useAppPropertyDemo01();
const { property } = storeToRefs(propertyStore);

// Loading State
const loading = ref(false);

// Fetch Property
const getPropertyData = async () => {
    loading.value = true;
    try {
        const res = await propertyStore.getPropertyDemo01(propertySlug);
        
        loading.value = false;

        if (res.status !== 200) {
            router.push({ name: 'property-not-found-404' });
        }
    } catch (error) {
        router.push({ name: 'property-not-found-404' });
    }
};

onMounted(() => {
    getPropertyData();
});
</script>