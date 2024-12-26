<template>
    <div class="item-listing-wrap item-listing-wrap-v6 card">
        <div class="item-wrap item-wrap-v6 project-item-wrap-v6 h-100">
            <div class="d-flex align-items-center h-100">
                <div class="item-header">
                    <ItemFeaturedLabel/>
                    <a href="#" class="item-v6-image">
                        <img class="img-fluid" src="https://placehold.co/584x438" alt="">
                    </a><!-- hover-effect -->
                    <ItemToolsV2/>
                </div><!-- item-header -->	
                <div class="item-body flex-grow-1">
                    <ItemTitle/>
                    <div class="d-flex justify-content-between align-items-center amenities-price-wrap">
                        <ul class="item-price-wrap">
                            <li class="item-price">$1,990,000</li>
                        </ul>
                        <ItemFeaturesV6/>
                    </div><!-- d-flex -->
                </div><!-- item-body -->
            </div><!-- d-flex -->
        </div><!-- item-wrap -->
    </div><!-- item-listing-wrap -->    
</template>

<script setup>
import ItemFeaturedLabel from './templates/ItemFeaturedLabel.vue';
import ItemFeaturesV6 from './templates/ItemFeaturesV6.vue';
import ItemTitle from './templates/ItemTitle.vue';
import ItemToolsV2 from './templates/ItemToolsV2.vue';
</script>