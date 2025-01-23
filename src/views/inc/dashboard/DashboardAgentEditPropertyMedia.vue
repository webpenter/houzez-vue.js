<template>
   <section class="dashboard-content-wrap">
            <div class="d-flex">
                <div class="order-2">
                    <!-- <?php include 'inc/dashboard/menu-edit-property.php';?> -->
                     <MenuEditProperty />
                </div><!-- order-2 -->
                <div class="order-1 flex-grow-1">
                    <div class="dashboard-content-inner-wrap">
                        <div class="alert alert-success" role="alert">
                            Settings saved successfully.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div><!-- alert -->
                        <div class="alert alert-danger" role="alert">
                            Something went wrong.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div><!-- alert -->
                        <!-- <?php include 'inc/dashboard/menu-edit-property-mobile.php';?> -->
                         <MenuEditPropertyMobile />
                        <!-- <?php include 'inc/dashboard/property/section-media.php';?> -->
                         <SectionMedia />
                        <div class="add-new-listing-bottom-nav-wrap">
                            <button class="btn btn-success">Save Changes</button>
                        </div>
                    </div><!-- dashboard-content-inner-wrap -->
                </div><!-- order-1 -->
            </div><!-- d-flex -->
        </section><!-- dashboard-content-wrap -->
        <section class="dashboard-side-wrap">
            <!-- <?php include 'inc/dashboard/side-wrap.php';?> -->
             <SideWrap />
        </section>
</template>
<script setup>
import MenuEditProperty from './MenuEditProperty.vue';
import MenuEditPropertyMobile from './MenuEditPropertyMobile.vue';
import SectionMedia from './property/SectionMedia.vue';
import SideWrap from './SideWrap.vue';
</script>