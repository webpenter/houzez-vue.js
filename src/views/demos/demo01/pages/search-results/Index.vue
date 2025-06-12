<template>
    <section class="half-map-wrap map-on-left clearfix">
        <div id="map-view-wrap" class="half-map-left-wrap">
            <Map />
        </div><!-- half-map-left-wrap -->
        <div class="half-map-right-wrap">
            <SearchHalfMapGeolocation />
            <div class="page-title-wrap">
                <div class="d-flex align-items-center">
                    <div class="page-title flex-grow-1">
                        <h1>58 results found</h1>
                    </div><!-- page-title -->
                    <div class="sort-by">
                        <div class="d-flex align-items-center">
                            <div class="sort-by-title">
                                Sort by:
                            </div><!-- sort-by-title -->
                            <select class="selectpicker form-control bs-select-hidden" title="Default Order"
                                data-live-search="false" data-dropdown-align-right="auto">
                                <option>Default Order</option>
                                <option>Price - Hight to Low</option>
                                <option>Price - Low to Hight</option>
                                <option>Featured First</option>
                                <option>Date - New to Old</option>
                                <option>Date - Old to New</option>
                            </select><!-- selectpicker -->
                        </div><!-- d-flex -->
                    </div><!-- sort-by -->
                    <div class="listing-switch-view">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="switch-btn btn-list active" href="#">
                                    <i class="houzez-icon icon-layout-bullets"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="switch-btn btn-grid" href="#">
                                    <i class="houzez-icon icon-layout-module-1"></i>
                                </a>
                            </li>
                        </ul>
                    </div><!-- listing-switch-view -->
                </div><!-- d-flex -->
            </div><!-- page-title-wrap -->
            <div class="listing-view list-view">
                
                <!-- <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>
                    <?php include 'inc/listing/item-v1.php';?>     -->
            </div><!-- listing-view -->
            <!-- <?php include 'inc/listing/pagination.php';?> -->
        </div><!-- half-map-right-wrap -->
    </section><!-- half-map-wrap -->
</template>
<script setup>
import SearchHalfMapGeolocation from '@/views/demos/components/search-results/search-half-map-geolocation/Index.vue';
import Map from '@/views/demos/components/search-results/map/Index.vue';
</script>