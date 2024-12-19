<template>
    <footer class="footer-wrap footer-wrap-v1">
        <div class="footer-top-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <AboutSiteWidget/>
                    </div><!-- col-lg-3 col-md-6 -->
                    <div class="col-lg-3 col-md-6">
                        <AboutSiteWidget/>
                    </div><!-- col-lg-3 col-md-6 -->
                    <div class="col-lg-3 col-md-6">
                        <AboutSiteWidget/>
                    </div><!-- col-lg-3 col-md-6 -->
                    <div class="col-lg-3 col-md-6">
                        <AboutSiteWidget/>
                    </div><!-- col-lg-3 col-md-6 -->
                </div><!-- row -->
            </div><!-- container -->
        </div><!-- footer-top-wrap -->
	    <FooterBottomV1/>
    </footer>
    <BackToTop/>
<!-- <?php // include 'inc/listing/templates/listing-lightbox.php';?> -->
    <ListingLightBoxV2/>
    <ListingLightBoxV3/>
<!-- <?php include 'inc/listing/compare-properties.php';?> -->
<!-- <?php include 'inc/search/overlay-advanced-mobile-search.php'; ?> -->
<!-- <?php include 'inc/realtors/mobile-agent-search-overlay.php'; ?> -->
<!-- <?php // include 'inc/search/overlay-advanced-mobile-search-v3.php'; ?> -->
<!-- <?php include 'inc/header/modal-login-register-form.php'; ?> -->
<!-- <?php include 'inc/header/modal-reset-password-form.php'; ?> -->
</template>

<script setup>
import ListingLightBoxV2 from '../listing/templates/ListingLightBoxV2.vue';
import ListingLightBoxV3 from '../listing/templates/ListingLightBoxV3.vue';
import AboutSiteWidget from '../widgets/AboutSiteWidget.vue';
import BackToTop from './BackToTop.vue';
import FooterBottomV1 from './FooterBottomV1.vue';
</script>