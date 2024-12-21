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
    <ListingLightBox/>
    <ListingLightBoxV2/>
    <ListingLightBoxV3/>
    <CompareProperties/>
    <MobileAgentSearchOverlay/>
    <OverlayAdvancedMobileSearch/>
    <OverlayAdvancedMobileSearchV3/>
    <ModalLoginRegisterForm/>
    <ModalResetPasswordForm/>
</template>

<script setup>
import CompareProperties from '../listing/CompareProperties.vue';
import ListingLightBox from '../listing/templates/ListingLightBox.vue';
import ListingLightBoxV2 from '../listing/templates/ListingLightBoxV2.vue';
import ListingLightBoxV3 from '../listing/templates/ListingLightBoxV3.vue';
import MobileAgentSearchOverlay from '../realtors/MobileAgentSearchOverlay.vue'; // Choose the correct path
import OverlayAdvancedMobileSearch from '../search/OverlayAdvancedMobileSearch.vue';
import OverlayAdvancedMobileSearchV3 from '../search/OverlayAdvancedMobileSearchV3.vue';
import ModalLoginRegisterForm from '../header/ModalLoginRegisterForm.vue';
import ModalResetPasswordForm from '../header/ModalResetPasswordForm.vue';
import AboutSiteWidget from '../widgets/AboutSiteWidget.vue';
import BackToTop from './BackToTop.vue';
import FooterBottomV1 from './FooterBottomV1.vue';
</script>
