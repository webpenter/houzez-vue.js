<template>
<div class="price-table-module">
    <div class="price-table-title">
        Standard
    </div><!-- price-table-title -->
    <div class="price-table-price-wrap">
        <div class="d-flex align-items-start justify-content-center">
            <span class="price-table-currency">$</span>
            <span class="price-table-price">49.99</span>
        </div><!-- d-flex -->
    </div><!-- price-table-price-wrap -->
    <div class="price-table-description">
        <ul class="list-unstyled">
            <li>
                <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i> Time Period: <strong>3 months</strong>
            </li>
            <li>
                <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i> Properties: <strong>100</strong>
            </li>
            <li>
                <i class="houzez-icon icon-check-circle-1 primary-text mr-1"></i> Featured Listings: <strong>10</strong>
            </li>
        </ul>
    </div><!-- price-table-description -->
    <div class="price-table-button">
        <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.create-account'}">
            Get Started
        </RouterLink>
    </div><!-- price-table-button -->
</div><!-- taxonomy-grids-module -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
