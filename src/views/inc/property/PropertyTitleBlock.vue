<template>
    <div class="page-title-wrap">
    <div class="container">
        <div class="d-flex align-items-center">
            <!-- <?php include 'inc/page/breadcrumb.php';?>  -->
             <BreadCrumb />
            <!-- <?php include 'inc/property/property-tools.php';?>  -->
             <PropertyTools />
        </div><!-- d-flex -->
        <div class="d-flex align-items-center property-title-price-wrap">
            <!-- <?php include 'inc/property/property-title.php';?>  -->
             <PropertyTitle />
            <!-- <?php include 'inc/listing/templates/item-price.php';?> -->
             <ItemPrice />
        </div><!-- d-flex -->
        <div class="property-labels-wrap">
            <span class="label-featured label">Featured</span>
            <a href="#" class="label-status label">For Sale</a>
            <a href="#" class="label-status label">Label</a>
            <a href="#" class="label-status label">Label</a>
        </div>
        <!-- <?php include 'inc/listing/templates/item-address.php';?> -->
         <ItemAddress />
    </div><!-- container -->
</div><!-- page-title-wrap -->
</template>
<script setup>
import BreadCrumb from '../page/BreadCrumb.vue';
import PropertyTools from './PropertyTools.vue';
import PropertyTitle from './PropertyTitle.vue';
import ItemPrice from '../listing/templates/ItemPrice.vue';
import ItemAddress from '../listing/templates/ItemAddress.vue';

</script>