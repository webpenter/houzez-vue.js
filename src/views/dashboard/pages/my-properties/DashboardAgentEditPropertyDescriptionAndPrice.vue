<template>
      <header class="header-main-wrap dashboard-header-main-wrap">
            <div class="dashboard-header-wrap">
                <div class="d-flex align-items-center">
                    <div class="dashboard-header-left flex-grow-1">
                        <!-- <?php include 'inc/page/breadcrumb.php';?> -->
                         <BreadCrumb />
                        <h1>Property Title</h1>         
                    </div><!-- dashboard-header-left -->
                    <div class="dashboard-header-right">
                        <a class="btn btn-primary-outlined" href="#">View Property</a> <a class="btn btn-primary-outlined" href="#">Save as Draft</a>
                    </div><!-- dashboard-header-right -->
                </div><!-- d-flex -->
            </div><!-- dashboard-header-wrap -->
        </header><!-- .header-main-wrap -->
        <section class="dashboard-content-wrap dashboard-edit-listing">
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
                        <!-- <?php include 'inc/dashboard/property/section-description-and-price.php';?> -->
                         <SectionDescriptionAndPrice />
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
import MenuEditProperty from '@/views/inc/dashboard/MenuEditProperty.vue';
import MenuEditPropertyMobile from '@/views/inc/dashboard/MenuEditPropertyMobile.vue';
import SectionDescriptionAndPrice from '@/views/inc/dashboard/property/SectionDescriptionAndPrice.vue';
import SideWrap from '@/views/inc/dashboard/SideWrap.vue';
import BreadCrumb from '@/views/app/inc/page/BreadCrumb.vue';


</script>