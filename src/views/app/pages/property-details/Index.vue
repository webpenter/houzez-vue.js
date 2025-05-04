<template>
    <!-- <h1>Property Details</h1> -->
    <section class="content-wrap property-wrap property-detail-v3">
        <!-- <?php include 'inc/property/property-navigation.php';?> -->
        <!-- <?php include 'inc/property/property-title-block.php';?>  -->
        <PropertyNavigation />
        <PropertyTitleBlock />


        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 bt-content-wrap">
                    <div class="property-top-wrap">
                        <!-- <?php include 'inc/property/property-banner-v1.php';?> -->
                        <PropertyBannerV1 />
                    </div><!-- property-top-wrap -->
                    <div class="property-view">

                        <div class="visible-on-mobile">
                            <div class="mobile-top-wrap">
                                <div class="mobile-property-tools clearfix">
                                    <!-- <?php include 'inc/property/templates/banner-nav.php';?> -->
                                    <BannerNav />
                                    <!-- <?php include 'inc/property/property-tools.php';?>  -->
                                    <PropertyTools />
                                </div><!-- mobile-property-tools -->
                                <div class="mobile-property-title clearfix">
                                    <!-- <?php include 'inc/listing/templates/item-featured-label.php';?>
                                        <?php include 'inc/property/property-title.php';?> 
                                        <?php include 'inc/listing/templates/item-address.php';?>
                                        <?php include 'inc/listing/templates/item-price.php';?>
                                        <?php include 'inc/listing/templates/item-labels.php';?> -->
                                    <span class="label-featured label">Featured</span><!-- label-featured -->
                                    <div class="page-title">
                                        <h1>Appartment For Sale</h1>
                                    </div><!-- page-title -->
                                    <address class="item-address"><i class="houzez-icon icon-pin mr-1"></i>Miami Beach, FL 33154, United States</address><!-- item-address -->
                                    <ul class="item-price-wrap hide-on-list">
                                        <li class="item-price"><span class="price-prefix">From </span>$9,990<span class="price-postfix">/mo</span></li>
                                        <li class="item-sub-price">$1,200/Sq Ft</li>
                                    </ul>
                                    <div class="property-labels-wrap">
                                        <a href="#" class="label-status label">For Sale</a>
                                        <a href="#" class="label-status label">Label</a>
                                        <a href="#" class="label-status label">Label</a>
                                    </div>
                                </div><!-- mobile-property-title -->
                            </div><!-- mobile-top-wrap -->
                        </div><!-- visible-on-mobile -->
                        <!-- <?php include 'inc/property/property-overview-block-v2.php';?>
                            <?php include 'inc/property/property-overview-block.php';?>
                            <?php include 'inc/property/property-description-block.php';?>
                            <?php include 'inc/property/property-schedule-a-tour-block-v2.php';?>
                            <?php include 'inc/property/property-gallery-block.php';?>
                            <?php include 'inc/property/property-address-block.php';?>
                            <?php include 'inc/property/property-detail-block.php';?>
                            <?php include 'inc/property/property-mortgage-calculator-block.php';?>
                            <?php include 'inc/property/property-sub-listings-table-block.php';?>
                            <?php include 'inc/property/property-sub-listings-block.php';?>
                            <?php include 'inc/property/property-energy-class-block.php';?>
                            <?php include 'inc/property/property-features-block-with-custom-icons.php';?>
                            <?php include 'inc/property/property-floor-plans-block.php';?>
                            <?php include 'inc/property/property-walkscore-block.php';?>
                            <?php include 'inc/property/property-walkscore-block-v2.php';?>
                            <?php include 'inc/property/property-nearby-block.php';?>
                            <?php include 'inc/property/property-video-block.php';?>
                            <?php include 'inc/property/property-schedule-a-tour-block.php';?>
                            <?php include 'inc/property/property-virtual-tour-block.php';?>
                            <?php include 'inc/property/property-availability-calendar-block.php';?>
                            <?php include 'inc/property/property-agent-block.php';?>
                            <?php include 'inc/property/property-reviews.php';?>
                            <?php include 'inc/property/similar-properties.php';?>
                            <?php include 'inc/property/property-nav.php';?> -->
                            <PropertyOverviewBlockV1 />
                            <PropertyOverviewBlock />
                            <PropertyDescriptionBlock />
                            <PropertyScheduleATourBlockV1 />
                            <PropertyGalleryBlock />
                    </div><!-- listing-view -->
                </div><!-- bt-content-wrap -->
                <div class="col-lg-4 col-md-12 bt-sidebar-wrap houzez_sticky">
                    <div class="theiaStickySidebar">
                        <!-- <?php include 'inc/sidebar.php';?>  -->
                        <Sidebar />
                    </div><!-- theiaStickySidebar -->
                </div><!-- bt-sidebar-wrap -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- listing-wrap -->
</template>

<script>
import PropertyNavigation from '@/views/app/components/property-details/property-navigation/Index.vue';
import PropertyTitleBlock from '@/views/app/components/property-details/property-title-block/Index.vue';
import PropertyBannerV1 from '@/views/app/components/property-details/property-banner-v1/Index.vue';
import BannerNav from '@/views/app/components/property-details/property-banner-v1/BannerNav.vue';
import PropertyTools from '@/views/app/components/property-details/property-title-block/PropertyTools.vue';
import Sidebar from '@/views/app/components/property-details/sidebar/Index.vue';
import PropertyOverviewBlockV1 from '@/views/app/components/property-details/property/PropertyOverviewBlockV1.vue';
import PropertyOverviewBlock from '@/views/app/components/property-details/property/PropertyOverviewBlock.vue';
import PropertyDescriptionBlock from '@/views/app/components/property-details/property/PropertyDescriptionBlock.vue';
import PropertyScheduleATourBlockV1 from '@/views/app/components/property-details/property/PropertyScheduleATourBlockV1.vue';
import PropertyGalleryBlock from '@/views/app/components/property-details/property/PropertyGalleryBlock.vue';
export default {
    name: 'PropertyDetails',
    components: {
        PropertyNavigation,
        PropertyTitleBlock,
        PropertyBannerV1,
        BannerNav,
        PropertyTools,
        Sidebar,
        PropertyOverviewBlockV1,
        PropertyOverviewBlock,
        PropertyDescriptionBlock,
        PropertyScheduleATourBlockV1,
        PropertyGalleryBlock,
    },
    data() {
        return {
            property: {
                title: 'Sample Property Title',
                price: '$500,000',
                address: '123 Main St, City, State',
                status: 'For Sale',
                featured: true,
                labels: ['New', 'Popular'],
                images: [
                    { url: '/path/to/image1.jpg' },
                    { url: '/path/to/image2.jpg' }
                ],
                imageCount: 6
            }
        }
    }
}
</script>