<template>
    <div class="property-cards-module property-cards-module-v1 property-cards-module-3-cols">
        <div class="listing-view grid-view card-deck grid-view-3-cols">
            <ItemV6/>
            <ItemV6/>
            <ItemV6/>
            <ItemV6/>
            <ItemV6/>
            <ItemV6/>
        </div><!-- listing-view -->
        <div class="load-more-wrap">
            <a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>	
        </div><!-- load-more-wrap -->
    </div><!-- property-grid-module -->    
</template>

<script setup>
import ItemV6 from '../inc/listing/ItemV6.vue';
</script>