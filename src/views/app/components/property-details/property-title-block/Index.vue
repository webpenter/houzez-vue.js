<template>
    <div class="page-title-wrap">
        <div class="container">
            <div class="d-flex align-items-center">
                <BreadCrumb />
                <PropertyTools />
            </div><!-- d-flex -->
            <div class="d-flex align-items-center property-title-price-wrap">
                <div class="page-title">
                    <h1>Appartment For Sale</h1>
                </div><!-- page-title -->
                <ul class="item-price-wrap hide-on-list">
                    <li class="item-price"><span class="price-prefix">From </span>$9,990<span
                            class="price-postfix">/mo</span></li>
                    <li class="item-sub-price">$1,200/Sq Ft</li>
                </ul>
            </div><!-- d-flex -->
            <div class="property-labels-wrap">
                <span class="label-featured label">Featured</span>
                <a href="#" class="label-status label">For Sale</a>
                <a href="#" class="label-status label">Label</a>
                <a href="#" class="label-status label">Label</a>
            </div>
            <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>Miami Beach, FL 33154, United States</address><!-- item-address -->
            <!-- <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>9701 W Broadview Dr, Bay Harbor Islands, FL 33154, United States</address> --><!-- item-address -->
        </div><!-- container -->
    </div><!-- page-title-wrap -->
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue';
import PropertyTools from './PropertyTools.vue';

</script>
