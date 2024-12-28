<template>
        <section class="content-wrap property-wrap property-detail-v1">
            <!-- <?php include 'inc/property/property-navigation.php';?> -->
             <PropertyNavigation />
            <!-- <?php include 'inc/property/property-title-block.php';?>  -->
             <PropertyTitleBlock />


            <div class="property-top-wrap">
                <div class="container">
                    <!-- <?php include 'inc/property/property-banner-v1.php';?> -->
                     <PropertyBannerV1 />
                </div><!-- container -->
            </div><!-- property-top-wrap -->
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">                      
                        <div class="property-view">
                            <div class="visible-on-mobile">
                                <div class="mobile-top-wrap">
                                    <div class="mobile-property-tools clearfix">
                                        <!-- <?php include 'inc/property/templates/banner-nav.php';?> -->
                                        <!-- <?php // include 'inc/property/property-tools.php';?>  -->
                                    </div><!-- mobile-property-tools -->
                                    <div class="mobile-property-title clearfix">
                                        <!-- <?php include 'inc/listing/templates/item-featured-label.php';?> -->
                                        <!-- <?php include 'inc/listing/templates/item-labels.php';?> -->
                                        <!-- <?php include 'inc/property/property-title.php';?>  -->
                                        <!-- <?php include 'inc/listing/templates/item-address.php';?> -->
                                        <!-- <?php include 'inc/listing/templates/item-price.php';?> -->
                                        <div class="mobile-property-tools mobile-property-tools-bottom clearfix">
                                            <!-- <?php include 'inc/property/property-tools.php';?>  -->
                                        </div>
                                    </div><!-- mobile-property-title -->
                                </div><!-- mobile-top-wrap -->
                            </div><!-- visible-on-mobile -->
                            <!-- <?php include 'inc/property/property-overview-block-v2.php';?> -->
                            <!-- <?php include 'inc/property/property-overview-block.php';?> -->
                            <!-- <?php include 'inc/property/property-description-block.php';?> -->
                            <!-- <?php include 'inc/property/property-schedule-a-tour-block-v2.php';?> -->
                            <!-- <?php include 'inc/property/property-gallery-block.php';?> -->
                            <!-- <?php include 'inc/property/property-address-block.php';?> -->
                            <!-- <?php include 'inc/property/property-detail-block.php';?> -->
                            <!-- <?php include 'inc/property/property-mortgage-calculator-block.php';?> -->
                            <!-- <?php include 'inc/property/property-morgage-calculator-block-v2.php';?> -->
                            <!-- <?php include 'inc/property/property-sub-listings-table-block.php';?> -->
                            <!-- <?php include 'inc/property/property-sub-listings-block.php';?> -->
                            <!-- <?php include 'inc/property/property-energy-class-block.php';?> -->
                            <!-- <?php include 'inc/property/property-features-block-with-custom-icons.php';?> -->
                            <!-- <?php include 'inc/property/property-floor-plans-block.php';?> -->
                            <!-- <?php include 'inc/property/property-walkscore-block.php';?> -->
                            <!-- <?php include 'inc/property/property-walkscore-block-v2.php';?> -->
                            <!-- <?php include 'inc/property/property-nearby-block.php';?> -->
                            <!-- <?php include 'inc/property/property-video-block.php';?> -->
                            <!-- <?php include 'inc/property/property-schedule-a-tour-block.php';?> -->
                            <!-- <?php include 'inc/property/property-virtual-tour-block.php';?> -->
                            <!-- <?php include 'inc/property/property-availability-calendar-block.php';?> -->
                            <!-- <?php include 'inc/property/property-agent-block.php';?> -->
                            <!-- <?php include 'inc/property/property-reviews.php';?> -->
                            <!-- <?php include 'inc/property/similar-properties.php';?> -->
                            <!-- <?php include 'inc/property/property-nav.php';?> -->
                        </div><!-- listing-view -->
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap houzez_sticky">
                        <div class="theiaStickySidebar">
                            <!-- <?php include 'inc/sidebar.php';?>  -->
                        </div><!-- theiaStickySidebar -->
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- property-wrap -->
</template>
<script setup>
import PropertyBannerV1 from '../../inc/property/PropertyBannerV1.vue';
import PropertyNavigation from '../../inc/property/PropertyNavigation.vue';
import PropertyTitleBlock from '../../inc/property/PropertyTitleBlock.vue';


</script>