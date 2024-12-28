<template>
    <!-- Properties -->
    <section class="listing-wrap">
            <div class="container">
                <div class="page-title-wrap">
                    <!-- <?php include 'inc/page/breadcrumb.php';?>  -->
                     <BreadCrumb />
                    <div class="d-flex align-items-center">
                        <!-- <?php include 'inc/page/page-title.php';?>  -->
                         <PageTitle />
                        <!-- <?php include 'inc/listing/listing-switch-view.php';?>  -->
                         <ListingSwitchView />
                    </div><!-- d-flex -->  
                </div><!-- page-title-wrap -->
                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">                      
                        <div class="listing-tools-wrap">
                            <div class="d-flex align-items-center">
                                <!-- <?php include 'inc/listing/listing-tabs.php';?>     -->
                                 <ListingTabs />
                                <!-- <?php include 'inc/listing/listing-sort-by.php';?>     -->
                                 <ListingSortBy />
                            </div><!-- d-flex -->
                        </div><!-- listing-tools-wrap -->                   
                        <div class="listing-view list-view">
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />



                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                           

                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?>    -->
                        </div><!-- listing-view -->
                        <!-- <?php include 'inc/listing/pagination.php';?> -->
                         <Pagination />
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
            
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
</template>

<script setup>
import BreadCrumb from '@/views/inc/page/BreadCrumb.vue';
import PageTitle from '@/views/inc/page/PageTitle.vue';
import ListingSwitchView from '@/views/inc/listing/ListingSwitchView.vue';
import ListingTabs from '@/views/inc/listing/ListingTabs.vue';
import ListingSortBy from '@/views/inc/listing/ListingSortBy.vue';
import ItemV1 from '@/views/inc/listing/ItemV1.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>