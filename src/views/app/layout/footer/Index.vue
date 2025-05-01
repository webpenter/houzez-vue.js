<template>
    <footer class="footer-wrap footer-wrap-v1 mt-3">
        <div class="footer-top-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <!-- <?php include 'inc/widgets/about-site-widget.php';?>  -->
                        <div class="widget widget-wrap widget-about-site">
                            <div class="widget-header">
                                <h3 class="widget-title">
                                    About This Website
                                </h3><!-- widget-title -->
                            </div><!-- widget-header -->
                            <div class="widget-body">
                                <div class="widget-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div><!-- widget-content -->
                                <div class="widget-read-more">
                                    <a href="#">Read more</a>
                                </div><!-- widget-read-more -->
                            </div><!-- widget-body -->
                        </div><!-- widget-about-site -->
                    </div><!-- col-lg-3 col-md-6 -->
                    <div class="col-lg-3 col-md-6">
                        <!-- <?php include 'inc/widgets/about-site-widget.php';?>  -->
                        <div class="widget widget-wrap widget-about-site">
                            <div class="widget-header">
                                <h3 class="widget-title">
                                    About This Website
                                </h3><!-- widget-title -->
                            </div><!-- widget-header -->
                            <div class="widget-body">
                                <div class="widget-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div><!-- widget-content -->
                                <div class="widget-read-more">
                                    <a href="#">Read more</a>
                                </div><!-- widget-read-more -->
                            </div><!-- widget-body -->
                        </div><!-- widget-about-site -->
                    </div><!-- col-lg-3 col-md-6 -->
                    <div class="col-lg-6 col-md-6">
                        <!-- <?php include 'inc/widgets/about-site-widget.php';?>  -->
                        <div class="widget widget-wrap widget-about-site">
                            <div class="widget-header">
                                <h3 class="widget-title">
                                    About This Website
                                </h3><!-- widget-title -->
                            </div><!-- widget-header -->
                            <div class="widget-body">
                                <div class="widget-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div><!-- widget-content -->
                                <div class="widget-read-more">
                                    <a href="#">Read more</a>
                                </div><!-- widget-read-more -->
                            </div><!-- widget-body -->
                        </div><!-- widget-about-site -->
                    </div><!-- col-lg-6 col-md-6 -->
                </div><!-- row -->
            </div><!-- container -->
        </div><!-- footer-top-wrap -->
        <!-- <?php include 'inc/footer/footer-bottom-v4.php';?> -->
        <div class="footer-bottom-wrap footer-bottom-wrap-v4">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="footer-copyright">
                        &copy; Houzez - All rights reserved
                    </div><!-- footer-copyright -->
                    <!-- <?php include 'inc/nav/logo-white.php';?> -->
                    <div class="logo">
                        <RouterLink :to="{ name: 'app' }">
                            <img src="@/assets/img/app-side/logo-houzez-white.png" alt="logo" />
                        </RouterLink>
                    </div><!-- .logo -->
                    <div class="footer-social">
                        <span>
                            <a class="btn-facebook" target="_blank" href="#">
                                <i class="houzez-icon icon-social-media-facebook mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-instagram" target="_blank" href="#">
                                <i class="houzez-icon icon-social-instagram mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-twitter" target="_blank" href="#">
                                <i class="houzez-icon icon-x-logo-twitter-logo-2 mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-linkedin" target="_blank" href="#">
                                <i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-googleplus" target="_blank" href="#">
                                <i class="houzez-icon icon-social-media-google-plus-1 mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-youtube" target="_blank" href="#">
                                <i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-pinterest" target="_blank" href="#">
                                <i class="houzez-icon icon-social-pinterest mr-2"></i>
                            </a>
                        </span>
                        <span>
                            <a class="btn-vimeo" target="_blank" href="#">
                                <i class="houzez-icon icon-social-video-vimeo mr-2"></i>
                            </a>
                        </span>
                    </div><!-- footer-social -->
                </div><!-- d-flex -->
            </div><!-- container -->
        </div><!-- footer-top-wrap -->
    </footer>
</template>

<script setup>
import Logo from '../navbar/Logo.vue';

</script>
<style scoped>
.footer-social {
    display: flex;
    flex-wrap: wrap; /* Optional: wraps to the next line if needed */
    gap: 10px; /* Optional: space between icons */
    align-items: center;
}

.footer-social span {
    display: inline-block;
}

</style>